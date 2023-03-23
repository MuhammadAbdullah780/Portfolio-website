import { getUser } from "../apiCalls";
import ContactSection from "../components/contact-section/ContactSection";
import PageWrapper from "../components/PageWrapper";


export const metadata = {
  title:'Contact | Portfolio',
}

export default async function page() {
  const user = await getUser()
  return (
    <PageWrapper>
      <ContactSection links={user?.links} />
    </PageWrapper>
  );
}


