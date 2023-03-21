import { getUser } from "@/utils/apiCalls";
import AboutUs from "../components/about-section/AboutUs";
import UserInfo from "../components/about-section/UserInfo";
import FlexColumn from "../components/FlexColumn";
import PageWrapper from "../components/PageWrapper";
import SocialIconDiv from "../components/SocialIconDiv";


export const metadata = {
  title:'About | Portfolio',
}

async function page() {
  const { user } = await getUser();
  return (
    <PageWrapper>
      <FlexColumn className="gap-5">
        <UserInfo user={user[0]} />
        <AboutUs user={user[0]} />
        <SocialIconDiv links={user[0].links} />
      </FlexColumn>
    </PageWrapper>
  );
}

export default page;
