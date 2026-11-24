import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/posts/creating-my-second-pet-project-pt2",
        destination: "/posts/always-something-to-write-about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
