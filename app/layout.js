import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Saqib Ur Rehman - Full Stack Developer",
  description:
    "This is the portfolio of Saqib Ur Rehman. I am a passionate full-stack developer with a love for JavaScript and modern web technologies. I'm self-taught, always eager to learn new things, and enjoy solving complex problems. I believe in continuous growth and learning, and I’m always open to collaborating on exciting projects. Whether it's creating intuitive frontend interfaces with React or building robust backend systems with Node.js, I thrive in both areas and enjoy every challenge along the way",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/profile.JPG" sizes="any" />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
