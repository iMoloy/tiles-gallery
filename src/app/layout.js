import "./globals.css";
import "animate.css";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          <NavbarComponent />
          <main className="min-h-[calc(100vh-200px)]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
