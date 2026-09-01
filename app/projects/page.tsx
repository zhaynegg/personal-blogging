import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      kicker="Building"
      lead="Things I am building, in progress and finished."
    >
      <p className="text-muted">Nothing here yet.</p>
    </PageLayout>
  );
}
