import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/session";

export default async function MyProfilePage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="soft-card overflow-hidden rounded-lg bg-white">
        <div className="tile-pattern bg-[#4e6b52] px-6 py-12 text-white md:px-10">
          <p className="font-semibold uppercase tracking-[0.18em] text-white/75">
            My Profile
          </p>
          <h1 className="mt-2 text-4xl font-black">Account Information</h1>
        </div>

        <div className="grid gap-8 p-6 md:grid-cols-[260px_1fr] md:p-10">
          <div>
            <div className="avatar">
              <div className="h-56 w-56 rounded-lg bg-[#f7f3ea]">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    width={224}
                    height={224}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <ProfileInfo title="Name" value={user.name || "Not added"} />
            <ProfileInfo title="Email" value={user.email} />
            <ProfileInfo
              title="Photo URL"
              value={user.image || "No profile image added"}
            />
            <Link
              href="/my-profile/update"
              className="btn border-none bg-[#b96f4a] text-white hover:bg-[#a26040]"
            >
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileInfo({ title, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
        {title}
      </p>
      <p className="mt-2 break-words text-lg font-semibold text-[#17211c]">
        {value}
      </p>
    </div>
  );
}
