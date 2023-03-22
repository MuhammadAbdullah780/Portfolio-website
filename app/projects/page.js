import WorkSection from "../components/work-section/WorkSection";
import { getProjects } from "@/utils/apiCalls";
import PageWrapper from "../components/PageWrapper";

export const metadata = {
  title:'Projects | Portfolio',
}

async function page() {
  const data = await getProjects()
  return (
    <PageWrapper>
      <WorkSection projects={data} />
    </PageWrapper>
  );
}

export default page;
