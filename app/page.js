import AboutUs from "./components/about-section/AboutUs";
import UserInfo from "./components/about-section/UserInfo";
import FlexColumn from "./components/FlexColumn";
import Skills from "./components/about-section/Skills";
import WorkSection from "./components/work-section/WorkSection";
import ContactSection from "./components/contact-section/ContactSection";
import { getProjects, getSkills, getUser } from "@/utils/apiCalls";
import PageWrapper from "./components/PageWrapper";

export const metadata = {
  title:'Portfolio Website',
}


export default async function Home() {
  const user = getUser();
  const projects = getProjects();
  const skills = getSkills();
  const result = await Promise.all([user, projects, skills]);

  return (
    <>
      <PageWrapper>
        <FlexColumn className="gap-5">
          <UserInfo user={result[0].user} />
          <AboutUs user={result[0].user} />
          <Skills skills={result[2].data} />
          <WorkSection projects={result[1].data} />
          <ContactSection links={result[0].user?.links} />
        </FlexColumn>
      </PageWrapper>
    </>
  );
}
