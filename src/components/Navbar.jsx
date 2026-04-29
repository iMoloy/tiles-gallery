"use client";

import Link from "next/link";

export default function NavbarComponent() {
  const isLoggedIn = false;

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-10 sticky top-0 z-50">
      <div className="navbar-start">
        <Link href="/" className="text-2xl font-bold">
          Tiles<span className="text-primary">Gallery</span>
        </Link>
      </div>

      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-tiles">All Tiles</Link>
          </li>
          <li>
            <Link href="/my-profile">My Profile</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {isLoggedIn ? (
          <>
            <Link href="/my-profile" className="font-medium hover:text-primary">
              Profile
            </Link>
            <button className="btn btn-sm btn-error">Logout</button>
          </>
        ) : (
          <Link href="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
