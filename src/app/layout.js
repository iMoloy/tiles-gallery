import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
import "animate.css";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./providers";
export const metadata = {
  title: "LuminaTiles",
  description: "LuminaTiles is a curated tiles gallery for modern spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning>
        <Providers>
          <NavbarComponent />
          <main className="min-h-[calc(100vh-200px)]">{children}</main>
          <Footer />
          <ToastContainer position="top-center" autoClose={3000} />
        </Providers>
      </body>
    </html>
  );
}
