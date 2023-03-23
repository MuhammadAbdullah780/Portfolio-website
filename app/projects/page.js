import WorkSection from "../components/work-section/WorkSection";
import PageWrapper from "../components/PageWrapper";
import { getProjects } from "../apiCalls";

export const metadata = {
  title:'Projects | Portfolio',
}

export default async function page() {
  const data = await getProjects()
  return (
    <PageWrapper>
      <WorkSection projects={data} />
    </PageWrapper>
  );
}

