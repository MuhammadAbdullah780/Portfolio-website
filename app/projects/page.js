import WorkSection from "../components/work-section/WorkSection";
import PageWrapper from "../components/PageWrapper";
import { getProjects } from "../apiCalls";

export const metadata = {
  title:'Projects | Portfolio',
}

export async function getProjectsData() {
  try {
    const res = await getProjects();
    return res;
  } catch (err) {
    console.log(err);
  }
}

export default async function page() {
  const data = await getProjectsData()
  return (
    <PageWrapper>
      <WorkSection projects={data} />
    </PageWrapper>
  );
}

