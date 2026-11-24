// Problem-solving stats shown on the home page.
//
// Codeforces, AtCoder and LeetCode are fetched live from their public APIs.
// CSES and Project Euler have no public API, so their counts are entered by
// hand below. A platform with no data is simply left out of the section.

/** How often the live numbers are refreshed, in seconds (12 hours). */
const REFRESH_SECONDS = 43200;

export const profiles = {
  codeforces: "zhassyn",
  atcoder: "zhasyn20",
  // The username from your profile URL: leetcode.com/u/<username>/
  leetcode: "zhasyn",
};

// Updated by hand: these sites do not publish solve counts publicly.
export const manualStats = {
  cses: {
    solved: 19 as number | null,
    total: 400,
    // Your profile, e.g. "https://cses.fi/user/123456". Leave empty for no link.
    url: "",
  },
  projectEuler: {
    solved: 53 as number | null,
    url: "",
  },
};

export type PlatformStat = {
  name: string;
  solved: number;
  /** Shown after the number, e.g. "/ 400" */
  outOf?: number;
  url?: string;
  /** Headline detail, e.g. "Candidate Master" */
  detail?: string;
  /** Secondary detail, e.g. "Peak 2032 · now 1713" */
  subDetail?: string;
  /** Colour of the platform's rank; tints the card for rated platforms. */
  rankColor?: string;
  live: boolean;
};

export type ProblemSolvingStats = {
  platforms: PlatformStat[];
  totalSolved: number;
};

async function getJson<T>(url: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(url, {
    ...init,
    next: { revalidate: REFRESH_SECONDS },
    // Don't let a slow platform hold up the build.
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`${url} responded ${res.status}`);
  return res.json() as Promise<T>;
}

function titleCase(text: string) {
  return text.replace(/\b\w/g, (c) => c.toUpperCase());
}

// Official Codeforces rank colours.
function codeforcesColor(rating: number) {
  if (rating >= 2400) return "#e8202a"; // grandmaster
  if (rating >= 2100) return "#ff8c00"; // master
  if (rating >= 1900) return "#aa00aa"; // candidate master
  if (rating >= 1600) return "#1f3fe0"; // expert
  if (rating >= 1400) return "#03a89e"; // specialist
  if (rating >= 1200) return "#1f9d2f"; // pupil
  return "#808080"; // newbie
}

// Official AtCoder rating colours.
function atcoderColor(rating: number) {
  if (rating >= 2800) return "#e8202a"; // red
  if (rating >= 2400) return "#ff8000"; // orange
  if (rating >= 2000) return "#c0a000"; // yellow
  if (rating >= 1600) return "#1f3fe0"; // blue
  if (rating >= 1200) return "#1b9bd1"; // light blue (AtCoder's "cyan")
  if (rating >= 800) return "#1f9d2f"; // green
  if (rating >= 400) return "#804000"; // brown
  return "#808080"; // grey
}

type CodeforcesUser = { rating?: number; maxRating?: number; rank?: string; maxRank?: string };
type CodeforcesSubmission = {
  verdict?: string;
  problem: { contestId?: number; problemsetName?: string; index: string };
};

async function getCodeforces(handle: string): Promise<PlatformStat> {
  const [info, status] = await Promise.all([
    getJson<{ status: string; result: CodeforcesUser[] }>(
      `https://codeforces.com/api/user.info?handles=${encodeURIComponent(handle)}`,
    ),
    getJson<{ status: string; result: CodeforcesSubmission[] }>(
      `https://codeforces.com/api/user.status?handle=${encodeURIComponent(handle)}`,
    ),
  ]);
  if (info.status !== "OK" || status.status !== "OK") throw new Error("Codeforces API error");

  const solved = new Set(
    status.result
      .filter((s) => s.verdict === "OK")
      .map((s) => `${s.problem.contestId ?? s.problem.problemsetName}-${s.problem.index}`),
  ).size;

  const user = info.result[0];
  const peak =
    user.maxRating && user.maxRank ? { rating: user.maxRating, rank: titleCase(user.maxRank) } : undefined;

  return {
    name: "Codeforces",
    solved,
    url: `https://codeforces.com/profile/${handle}`,
    detail: peak?.rank,
    subDetail: peak ? `Peak ${peak.rating}${user.rating ? ` · now ${user.rating}` : ""}` : undefined,
    rankColor: peak ? codeforcesColor(peak.rating) : undefined,
    live: true,
  };
}

type AtCoderContest = { IsRated: boolean; NewRating: number };

async function getAtCoder(user: string): Promise<PlatformStat> {
  const [rank, history] = await Promise.all([
    getJson<{ count: number }>(
      `https://kenkoooo.com/atcoder/atcoder-api/v3/user/ac_rank?user=${encodeURIComponent(user)}`,
    ),
    getJson<AtCoderContest[]>(`https://atcoder.jp/users/${encodeURIComponent(user)}/history/json`),
  ]);

  const rated = history.filter((c) => c.IsRated);
  const current = rated.at(-1)?.NewRating;
  const peak = rated.length ? Math.max(...rated.map((c) => c.NewRating)) : undefined;

  return {
    name: "AtCoder",
    solved: rank.count,
    url: `https://atcoder.jp/users/${user}`,
    detail: peak ? `Peak ${peak}` : undefined,
    subDetail: current ? `Now ${current} · ${rated.length} rated contests` : undefined,
    rankColor: peak ? atcoderColor(peak) : undefined,
    live: true,
  };
}

type LeetCodeResponse = {
  data?: {
    matchedUser: {
      submitStatsGlobal: { acSubmissionNum: { difficulty: string; count: number }[] };
    } | null;
  };
};

async function getLeetCode(username: string): Promise<PlatformStat> {
  const body = await getJson<LeetCodeResponse>("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Referer: "https://leetcode.com" },
    body: JSON.stringify({
      query:
        "query($u: String!) { matchedUser(username: $u) { submitStatsGlobal { acSubmissionNum { difficulty count } } } }",
      variables: { u: username },
    }),
  });
  const counts = body.data?.matchedUser?.submitStatsGlobal.acSubmissionNum;
  if (!counts) throw new Error(`LeetCode user "${username}" not found`);

  const by = Object.fromEntries(counts.map((c) => [c.difficulty, c.count]));
  return {
    name: "LeetCode",
    solved: by.All ?? 0,
    url: `https://leetcode.com/u/${username}/`,
    detail: `${by.Hard ?? 0} hard · ${by.Medium ?? 0} medium`,
    subDetail: `${by.Easy ?? 0} easy`,
    live: true,
  };
}

/** Runs a fetcher, logging and swallowing failures so one platform can't break the page. */
async function settle<T>(name: string, task: () => Promise<T>): Promise<T | null> {
  try {
    return await task();
  } catch (error) {
    console.warn(`[problem-solving] ${name} unavailable:`, error instanceof Error ? error.message : error);
    return null;
  }
}

export async function getProblemSolvingStats(): Promise<ProblemSolvingStats> {
  const [codeforces, atcoder, leetcode] = await Promise.all([
    profiles.codeforces ? settle("Codeforces", () => getCodeforces(profiles.codeforces)) : null,
    profiles.atcoder ? settle("AtCoder", () => getAtCoder(profiles.atcoder)) : null,
    profiles.leetcode ? settle("LeetCode", () => getLeetCode(profiles.leetcode)) : null,
  ]);

  const { cses, projectEuler } = manualStats;
  const manual: PlatformStat[] = [];
  if (cses.solved !== null) {
    manual.push({
      name: "CSES",
      solved: cses.solved,
      outOf: cses.total,
      url: cses.url || undefined,
      detail: `${Math.round((cses.solved / cses.total) * 100)}% of the problem set`,
      live: false,
    });
  }
  if (projectEuler.solved !== null) {
    manual.push({
      name: "Project Euler",
      solved: projectEuler.solved,
      url: projectEuler.url || undefined,
      // Project Euler awards a level for every 25 problems solved.
      detail: `Level ${Math.floor(projectEuler.solved / 25)}`,
      subDetail: "Maths-heavy puzzles",
      live: false,
    });
  }

  const platforms = [codeforces, atcoder, leetcode, ...manual].filter((p): p is PlatformStat => p !== null);

  return {
    platforms,
    totalSolved: platforms.reduce((sum, p) => sum + p.solved, 0),
  };
}
