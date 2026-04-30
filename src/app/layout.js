import "./globals.css";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tiles Gallery",
  description: "A website to showcase a tile gallery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <NavbarComponent />
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
