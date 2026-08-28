"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  AlertCircle,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import Animation from "@/Components/Home/Animation";
import { authClient } from "@/lib/auth-client";

const InputField = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  error = false,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[10px] font-medium text-gray-400"
      >
        {label}
      </label>

      <div className="group relative">
        <Icon
          size={15}
          className={`absolute left-3.5 top-1/2 z-10 -translate-y-1/2 transition ${error
              ? "text-red-500"
              : "text-gray-600 group-focus-within:text-[#DC2F02]"
            }`}
        />

        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          {...props}
          className={`h-[42px] w-full rounded-xl border bg-black/25 pl-10 pr-10 text-xs text-white outline-none transition placeholder:text-gray-700 ${error
              ? "border-red-500/60 focus:border-red-500 focus:ring-4 focus:ring-red-500/5"
              : "border-white/10 focus:border-[#DC2F02]/50 focus:ring-4 focus:ring-[#DC2F02]/5"
            }`}
        />
      </div>
    </div>
  );
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const getErrorMessage = (error) => {
    if (!error) {
      return "Login failed. Please try again.";
    }

    const message =
      error?.message ||
      error?.error?.message ||
      error?.statusText ||
      "";

    const code =
      error?.code ||
      error?.error?.code ||
      "";

    const lowerMessage = String(message).toLowerCase();

    if (
      code === "INVALID_EMAIL_OR_PASSWORD" ||
      lowerMessage.includes("invalid email or password") ||
      lowerMessage.includes("invalid password") ||
      lowerMessage.includes("incorrect password")
    ) {
      return "Invalid email or password.";
    }

    if (
      code === "USER_NOT_FOUND" ||
      lowerMessage.includes("user not found")
    ) {
      return "No account was found with this email.";
    }

    if (
      code === "INVALID_EMAIL" ||
      lowerMessage.includes("invalid email")
    ) {
      return "Please enter a valid email address.";
    }

    if (
      lowerMessage.includes("email and password sign in is not enabled")
    ) {
      return "Email and password login is disabled in Better Auth.";
    }

    if (
      lowerMessage.includes("unauthorized") ||
      lowerMessage.includes("authentication failed")
    ) {
      return "Invalid email or password.";
    }

    return message || "Login failed. Please try again.";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const email = String(
      formData.get("email") || ""
    ).trim();

    const password = String(
      formData.get("password") || ""
    );

    // No frontend password validation
    if (!email || !password) {
      setErrorMessage("Please enter your email and password.");
      setLoading(false);
      return;
    }

    try {
      const { data, error } =
        await authClient.signIn.email(
          {
            email,
            password,
          },
          {
            onSuccess: () => {
              setSuccessMessage(
                "Login successful! Redirecting..."
              );
            },

            onError: (ctx) => {
              const message = getErrorMessage(ctx?.error);

              setErrorMessage(message);
            },
          }
        );

      if (error) {
        setErrorMessage(getErrorMessage(error));
        return;
      }

      if (data) {
        setSuccessMessage(
          "Login successful! Redirecting..."
        );

        // Home page
        setTimeout(() => {
          window.location.replace("/");
        }, 700);
      }
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] font-oswald tracking-wider text-white">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:50px_50px]" />

      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.22, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[20%] top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC2F02]/15 blur-[130px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.16, 0.06],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-[#DC2F02]/10 blur-[110px]"
      />

      {/* Back Button */}
      <Link
        href="/"
        className="group absolute left-4 top-4 z-50 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[11px] font-medium text-gray-400 backdrop-blur-xl transition hover:border-[#DC2F02]/50 hover:bg-[#DC2F02]/10 hover:text-white md:left-7 md:top-7"
      >
        <ArrowLeft
          size={14}
          className="transition-transform group-hover:-translate-x-1"
        />

        Back to Portfolio
      </Link>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-14 lg:px-8 lg:py-8">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-14">

          {/* Animation */}
          <Animation />

          {/* Login */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto w-full max-w-lg"
          >
            {/* Header */}
            <div className="mb-4">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#DC2F02]/20 bg-[#DC2F02]/5 px-2.5 py-1">
                <Sparkles
                  size={11}
                  className="text-[#DC2F02]"
                />

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#DC2F02]">
                  Secure Login
                </span>
              </div>

              <h1 className="text-2xl font-black tracking-tight md:text-3xl">
                Welcome Back
                <span className="text-[#DC2F02]">
                  .
                </span>
              </h1>

              <p className="mt-1 text-xs text-gray-500">
                Sign in to your portfolio admin account.
              </p>
            </div>

            {/* Card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-2xl md:p-6">

              {/* Top Line */}
              <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DC2F02] to-transparent" />

              {/* Security */}
              <div className="mb-4 flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 p-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#DC2F02]/10 text-[#DC2F02]">
                  <ShieldCheck size={17} />
                </div>

                <div className="flex-1">
                  <p className="text-[11px] font-semibold text-gray-200">
                    Secure Authentication
                  </p>

                  <p className="text-[9px] text-gray-600">
                    Protected admin access
                  </p>
                </div>

                <CheckCircle2
                  size={15}
                  className="text-green-500/70"
                />
              </div>

              {/* ERROR */}
              {errorMessage && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mb-4 flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-[10px] text-red-400"
                >
                  <AlertCircle
                    size={14}
                    className="mt-0.5 shrink-0"
                  />

                  <span>{errorMessage}</span>
                </motion.div>
              )}

              {/* SUCCESS */}
              {successMessage && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mb-4 flex items-start gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-3 py-2.5 text-[10px] text-green-400"
                >
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0"
                  />

                  <span>{successMessage}</span>
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
              >
                {/* Email */}
                <InputField
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="admin@example.com"
                  icon={Mail}
                  error={!!errorMessage}
                />

                {/* Password */}
                <div className="relative">
                  <InputField
                    id="password"
                    name="password"
                    label="Password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="••••••••"
                    icon={Lock}
                    error={!!errorMessage}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-3 top-[30px] text-gray-500 transition hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={15} />
                    ) : (
                      <Eye size={15} />
                    )}
                  </button>
                </div>

                {/* Forgot */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-[9px] text-gray-600 transition hover:text-[#DC2F02]"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <motion.button
                  whileHover={{
                    scale: loading ? 1 : 1.015,
                  }}
                  whileTap={{
                    scale: loading ? 1 : 0.98,
                  }}
                  disabled={loading}
                  type="submit"
                  className="group relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#DC2F02] text-xs font-bold shadow-[0_0_25px_rgba(220,47,2,0.18)] transition hover:bg-[#ef3b0a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {!loading && (
                    <motion.span
                      animate={{
                        x: ["-150%", "150%"],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 w-20 skew-x-[-20deg] bg-white/10 blur-md"
                    />
                  )}

                  {loading ? (
                    <>
                      <Loader2
                        size={15}
                        className="animate-spin"
                      />

                      <span>
                        Signing In...
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">
                        Sign In
                      </span>

                      <ArrowRight
                        size={15}
                        className="relative z-10 transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Register */}
              <div className="mt-5 border-t border-white/5 pt-5 text-center">
                <p className="text-[9px] text-gray-600">
                  Dont have an account?
                </p>

                <Link
                  href="/auth/register"
                  className="mt-1 inline-flex items-center gap-1 text-[10px] font-medium text-[#DC2F02] transition hover:text-[#ef3b0a]"
                >
                  Create Admin Account

                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>

            {/* Footer */}
            <p className="mt-3 text-center text-[8px] tracking-wide text-gray-700">
              © {new Date().getFullYear()} Md. Khalekuzzaman

              <span className="mx-2 text-[#DC2F02]/40">
                •
              </span>

              Portfolio Admin
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}