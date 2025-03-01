import { getUser } from "../apiCalls";
import AboutUs from "../components/about-section/AboutUs";
import UserInfo from "../components/about-section/UserInfo";
import FlexColumn from "../components/FlexColumn";
import PageWrapper from "../components/PageWrapper";
import SocialIconDiv from "../components/SocialIconDiv";


export const metadata = {
  title:'About | Portfolio',
}

export async function getUserData() {
  try {
    const res = await getUser();
    return res;
  } catch (err) {
    console.log(err);
  }
}

export default async function page() {
  const user = await getUserData();
  return (
    <PageWrapper>
      <FlexColumn className="gap-5">
        <UserInfo user={user} />
        <AboutUs user={user} />
        <SocialIconDiv links={user?.links} />
      </FlexColumn>
    </PageWrapper>
  );
}
