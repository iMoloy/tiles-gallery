"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY || "71f8541560b267adf2e51cd2cb15d14f";

export default function UpdateProfileForm({ user }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const imageFile = form.image.files[0];
    
    let imageUrl = user.image;

    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
      
      try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          imageUrl = data.data.display_url;
        } else {
          toast.error("Failed to upload image.");
          setLoading(false);
          return;
        }
      } catch (err) {
        toast.error("An error occurred during image upload.");
        setLoading(false);
        return;
      }
    }

    const { error: updateError } = await authClient.updateUser({
      name,
      image: imageUrl,
    });

    setLoading(false);

    if (updateError) {
      toast.error(updateError.message || "Could not update your profile.");
      return;
    }

    toast.success("Profile updated successfully!");
    router.push("/my-profile");
    router.refresh();
  };

  return (
    <form onSubmit={handleUpdate} className="soft-card rounded-lg bg-white p-6">
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
          <span className="label-text mb-2 font-semibold">Profile Image</span>
          <input
            name="image"
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full"
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

