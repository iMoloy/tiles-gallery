import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-10">
      <div className="footer p-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <aside>
          <h6 className="text-primary opacity-100 text-3xl font-bold mb-4">
            Lumina<span className="text-white">Tiles</span>
          </h6>
          <p className="max-w-xs leading-relaxed text-slate-400">
            Premium collection of unique tiles for your dream home. Redefining
            your living and working spaces with elegance.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-white mb-4">
            Explore
          </h6>
          <Link
            href="/"
            className="link link-hover mb-2 block text-slate-400 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/all-tiles"
            className="link link-hover mb-2 block text-slate-400 hover:text-white"
          >
            All Tiles
          </Link>
          <Link
            href="/my-profile"
            className="link link-hover mb-2 block text-slate-400 hover:text-white"
          >
            My Profile
          </Link>
          <Link
            href="/login"
            className="link link-hover mb-2 block text-slate-400 hover:text-white"
          >
            Login
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-white mb-4">
            Contact
          </h6>
          <p className="mb-2 text-slate-400">Email: info@luminatiles.com</p>
          <p className="mb-2 text-slate-400">Phone: +880 1234 567890</p>
          <p className="text-slate-400">
            Location: Jessore, Khulna, Bangladesh
          </p>
        </nav>
      </div>

      <div className="footer px-10 py-6 border-t border-slate-700 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <aside className="items-center grid-flow-col">
          <p className="text-sm font-semibold text-slate-400">
            Copyright &copy; {new Date().getFullYear()} - All rights reserved by
            LuminaTiles
          </p>
        </aside>

        <nav className="md:place-self-center md:justify-self-end mt-4 md:mt-0">
          <div className="grid grid-flow-col gap-6">
            {/* Font Awesome Icons */}
            <a
              href="#"
              className="text-slate-400 hover:text-primary transition-colors text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-primary transition-colors text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-primary transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-primary transition-colors text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
