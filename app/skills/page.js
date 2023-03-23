import { getSkills } from "../apiCalls";
import Skills from "../components/about-section/Skills";
import PageWrapper from "../components/PageWrapper";

export const metadata = {
  title:'Skills | Portfolio',
}

export default async function page() {
  const data = await getSkills();
  return (
    <PageWrapper>
      <Skills skills={data} />
    </PageWrapper>
  );
}
