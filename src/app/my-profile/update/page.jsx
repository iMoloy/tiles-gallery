import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/session";
import UpdateProfileForm from "@/components/UpdateProfileForm";

export default async function UpdateProfilePage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/my-profile" className="btn btn-outline btn-sm mb-6">
        Back to Profile
      </Link>
      <p className="font-semibold uppercase tracking-[0.18em] text-[#b96f4a]">
        Update Profile
      </p>
      <h1 className="mt-2 text-4xl font-black text-[#17211c]">
        Update Information
      </h1>
      <p className="mb-8 mt-3 text-slate-600">
        Keep your profile details fresh for your tile gallery account.
      </p>
      <UpdateProfileForm user={session.user} />
    </div>
  );
}
