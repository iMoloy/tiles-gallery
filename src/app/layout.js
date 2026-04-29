import "./globals.css";
import { Providers } from "./providers";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LuminaTiles Gallery",
  description: "A website to showcase a tile gallery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="antialiased">
        <Providers>
          <NavbarComponent />
          <main className="min-h-[calc(100vh-200px)]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
