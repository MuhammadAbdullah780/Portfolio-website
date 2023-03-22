import "../styles/global.css";
import NavBar from "./components/navbar/NavBar";
import { Poppins } from "next/font/google";
import Footer from "./components/footer/Footer";

const fontPoppins = Poppins({
  weight: "200",
  style: "normal",
});

export const metadata = {
  description: "This is the simple Portfolio app created on top of Next Js",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "Portfolio Website"],
  authors: [{ name: "Muhammad Abdullah" }],
  colorScheme: "dark",
  creator: "Muhammad Abdullah",
  publisher: "Muhammad Abdullah",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`m-0 p-0 box-border bg-bg-primary ${fontPoppins.className} `}
      >
        <header>
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
