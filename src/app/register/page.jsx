"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;

    const { error: registerError } = await authClient.signUp.email({
      name,
      email,
      image,
      password,
    });

    setLoading(false);

    if (registerError) {
      toast.error(registerError.message || "Registration failed.");
      return;
    }

    toast.success("Registration successful. Please login now.");
    form.reset();
    router.push("/login");
  };

  const handleGoogleLogin = async () => {
    const { error: googleError } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (googleError) {
      toast.error(
        googleError.message ||
          "Google login is not configured yet. Please check environment variables.",
      );
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-10">
      <div className="soft-card w-full max-w-lg rounded-lg bg-white p-6">
        <p className="text-center font-semibold uppercase tracking-[0.18em] text-[#b96f4a]">
          User Registration
        </p>
        <h1 className="mt-2 text-center text-3xl font-black text-[#17211c]">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="mt-6 grid gap-4">
          <label className="form-control">
            <span className="label-text mb-2 font-semibold">Name</span>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control">
            <span className="label-text mb-2 font-semibold">Email</span>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control">
            <span className="label-text mb-2 font-semibold">Photo-url</span>
            <input
              name="image"
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control">
            <span className="label-text mb-2 font-semibold">Password</span>
            <input
              name="password"
              type="password"
              placeholder="Minimum 8 characters"
              className="input input-bordered w-full"
              minLength={8}
              required
            />
          </label>

          <button
            disabled={loading}
            className="btn border-none bg-[#4e6b52] text-white hover:bg-[#405844]"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <div className="divider text-sm text-slate-400">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline w-full gap-2">
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-[#4e6b52]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
