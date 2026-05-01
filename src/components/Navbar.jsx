"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FaBars, FaLayerGroup } from "react-icons/fa";
import { toast } from "react-toastify";

export default function NavbarComponent() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Successfully logged out!");
    router.push("/login");
    router.refresh();
  };

  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/all-tiles">All Tiles</Link>
      </li>
      <li>
        <Link href="/my-profile">My Profile</Link>
      </li>
    </>
  );

  return (
    <div className="navbar glass-strip sticky top-0 z-50 border-b border-base-300 px-4 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden" aria-label="Open menu">
            <FaBars />
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-2 text-xl font-black">
          <span className="grid size-10 place-items-center rounded-lg bg-[#4e6b52] text-white">
            <FaLayerGroup />
          </span>
          Lumina<span className="text-[#b96f4a]">Tiles</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-primary"></span>
        ) : session ? (
          <>
            <Link
              href="/my-profile"
              className="hidden items-center gap-2 font-medium hover:text-primary sm:flex"
            >
              <div className="avatar">
                <div className="size-8 rounded-full bg-base-200">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      width={32}
                      height={32}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>
              </div>
              Profile
            </Link>
            <button onClick={handleLogout} className="btn btn-sm bg-[#17211c] text-white hover:bg-[#2c3d33]">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="btn btn-sm bg-[#4e6b52] text-white hover:bg-[#405844]">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
