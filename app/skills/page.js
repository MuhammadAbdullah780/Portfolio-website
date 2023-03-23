import { getSkills } from "../apiCalls";
import Skills from "../components/about-section/Skills";
import PageWrapper from "../components/PageWrapper";

export const metadata = {
  title:'Skills | Portfolio',
}

export async function getSkillsData() {
  try {
    const res = await getSkills();
    return res;
  } catch (err) {
    console.log(err);
  }
}

export default async function page() {
  const data = await getSkillsData();
  return (
    <PageWrapper>
      <Skills skills={data} />
    </PageWrapper>
  );
}
