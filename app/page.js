import AboutUs from "./components/about-section/AboutUs";
import UserInfo from "./components/about-section/UserInfo";
import FlexColumn from "./components/FlexColumn";
import Skills from "./components/about-section/Skills";
import WorkSection from "./components/work-section/WorkSection";
import ContactSection from "./components/contact-section/ContactSection";
import PageWrapper from "./components/PageWrapper";
import { getUser, getSkills, getProjects } from "./apiCalls";

export const metadata = {
  title:'Portfolio Website',
}

export async function getSkillsData() {
  try {
    const res = await getSkills();
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function getProjectsData() {
  try {
    const res = await getProjects();
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function getUserData() {
  try {
    const res = await getUser();
    return res;
  } catch (err) {
    console.log(err);
  }
}


export default async function Home() {
  const user = getUserData();
  const projects = getProjectsData();
  const skills = getSkillsData();
  const result = await Promise.all([user, projects, skills]);

  return (
    <>
      <PageWrapper>
        <FlexColumn className="gap-5">
          <UserInfo user={result[0]} />
          <AboutUs user={result[0]} />
          <Skills skills={result[2]} />
          <WorkSection projects={result[1]} />
          <ContactSection links={result[0]?.links} />
        </FlexColumn>
      </PageWrapper>
    </>
  );
}
