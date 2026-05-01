"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm({ user }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;

    const { error: updateError } = await authClient.updateUser({
      name,
      image,
    });

    setLoading(false);

    if (updateError) {
      setError(updateError.message || "Could not update your profile.");
      return;
    }

    router.push("/my-profile");
    router.refresh();
  };

  return (
    <form onSubmit={handleUpdate} className="soft-card rounded-lg bg-white p-6">
      {error ? (
        <div className="alert alert-error mb-5 text-sm text-white">{error}</div>
      ) : null}

      <div className="grid gap-4">
        <label className="form-control">
          <span className="label-text mb-2 font-semibold">Name</span>
          <input
            name="name"
            type="text"
            defaultValue={user.name || ""}
            className="input input-bordered w-full"
            required
          />
        </label>

        <label className="form-control">
          <span className="label-text mb-2 font-semibold">Image</span>
          <input
            name="image"
            type="url"
            defaultValue={user.image || ""}
            placeholder="https://example.com/photo.jpg"
            className="input input-bordered w-full"
          />
        </label>
      </div>

      <button
        disabled={loading}
        className="btn mt-6 border-none bg-[#4e6b52] text-white hover:bg-[#405844]"
      >
        {loading ? "Updating..." : "Update Information"}
      </button>
    </form>
  );
}
