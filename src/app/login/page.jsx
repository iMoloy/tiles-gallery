"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const { error: loginError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    setLoading(false);

    if (loginError) {
      toast.error(loginError.message || "Login failed. Please try again.");
      return;
    }

    toast.success("Successfully logged in!");
    router.push("/");
    router.refresh();
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
      <div className="soft-card w-full max-w-md rounded-lg bg-white p-6">
        <p className="text-center font-semibold uppercase tracking-[0.18em] text-[#b96f4a]">
          User Login
        </p>
        <h1 className="mt-2 text-center text-3xl font-black text-[#17211c]">
          Welcome Back
        </h1>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
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
            <span className="label-text mb-2 font-semibold">Password</span>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              minLength={8}
              required
            />
          </label>

          <button
            disabled={loading}
            className="btn w-full border-none mt-4 bg-[#4e6b52] text-white hover:bg-[#405844]"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="divider text-sm text-slate-400">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full gap-2"
        >
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          New to LuminaTiles?{" "}
          <Link href="/register" className="font-bold text-[#4e6b52]">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
