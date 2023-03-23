import { getUser } from "../apiCalls";
import ContactSection from "../components/contact-section/ContactSection";
import PageWrapper from "../components/PageWrapper";


export const metadata = {
  title:'Contact | Portfolio',
}

export async function getUserDataForContact() {
  try {
    const res = await getUser();
    return res;
  } catch (err) {
    console.log(err);
  }
}


export default async function page() {
  const user = await getUserDataForContact()
  return (
    <PageWrapper>
      <ContactSection links={user?.links} />
    </PageWrapper>
  );
}


