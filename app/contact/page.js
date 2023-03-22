import { getUser } from "@/utils/apiCalls";
import ContactSection from "../components/contact-section/ContactSection";
import PageWrapper from "../components/PageWrapper";


export const metadata = {
  title:'Contact | Portfolio',
}

async function page() {
  const user = await getUser()
  return (
    <PageWrapper>
      <ContactSection links={user?.links} />
    </PageWrapper>
  );
}

export default page;

