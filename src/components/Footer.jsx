import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#17211c] text-slate-200">
      <div className="footer mx-auto grid max-w-7xl grid-cols-1 gap-10 p-10 md:grid-cols-3">
        <aside>
          <h6 className="mb-4 text-3xl font-black text-[#d99a75] opacity-100">
            Lumina<span className="text-white">Tiles</span>
          </h6>
          <p className="max-w-xs leading-relaxed text-slate-300">
            LuminaTiles curates warm, modern surfaces for homes, studios, and
            polished commercial spaces.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title mb-4 font-bold text-white opacity-100">
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
          <h6 className="footer-title mb-4 font-bold text-white opacity-100">
            Contact Us
          </h6>
          <p className="mb-2 text-slate-400">Email: info@luminatiles.com</p>
          <p className="mb-2 text-slate-400">Phone: +880 1234 567890</p>
          <p className="text-slate-400">
            Location: Jessore, Khulna, Bangladesh
          </p>
        </nav>
      </div>

      <div className="footer mx-auto flex max-w-7xl flex-col items-center justify-between border-t border-white/10 px-10 py-6 md:flex-row">
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
              href="https://www.facebook.com/"
              className="text-2xl text-slate-400 transition-colors hover:text-[#d99a75]"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/"
              className="text-2xl text-slate-400 transition-colors hover:text-[#d99a75]"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-2xl text-slate-400 transition-colors hover:text-[#d99a75]"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="text-2xl text-slate-400 transition-colors hover:text-[#d99a75]"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
