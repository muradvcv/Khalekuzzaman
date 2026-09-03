'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  User,Mail,Lock,Eye,EyeOff,ArrowRight,ArrowLeft,ShieldCheck,CircleCheck,Sparkles,
  CircleAlert,
} from 'lucide-react';
import Animation from '@/Components/Home/Animation';
import { authClient } from '@/lib/auth-client';

const InputField = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  icon: Icon,
  required = false,
  error = false,
  ...props
}) => (
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
            ? 'text-red-500'
            : 'text-gray-600 group-focus-within:text-[#DC2F02]'
          }`}
      />

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        {...props}
        className={`h-10.5 w-full rounded-xl border bg-black/25 pl-10 pr-10 text-xs text-white outline-none transition placeholder:text-gray-700 ${error
            ? 'border-red-500/60 focus:border-red-500/70 focus:ring-4 focus:ring-red-500/5'
            : 'border-white/10 focus:border-[#DC2F02]/50 focus:ring-4 focus:ring-[#DC2F02]/5'
          }`}
      />
    </div>
  </div>
);

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [authError, setAuthError] = useState('');

  const passwordsMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const handlePasswordChange = (e) => {
    const value = e.target.value;

    setPassword(value);

    if (confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;

    setConfirmPassword(value);

    if (value !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };
// better auth validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }

    setConfirmPasswordError(false);

    const alldata = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    );

    try {
      const { data, error } = await authClient.signUp.email({
        name: alldata.name,
        email: alldata.email,
        password: alldata.password,
        image: alldata.imageUrl,
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      console.log("Registration successful:", data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] font-oswald tracking-wider text-white">

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:50px_50px]" />

      {/* Moving Grid */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full border border-[#DC2F02]/5"
      />

      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.22, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
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
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-[#DC2F02]/10 blur-[110px]"
      />

      {/* Floating Particles */}
      {[...Array(18)].map((_, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [-20, -100],
            x: [0, index % 2 === 0 ? 20 : -20],
          }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            delay: index * 0.35,
            ease: 'easeOut',
          }}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#DC2F02]"
          style={{
            left: `${5 + index * 5}%`,
            bottom: `${5 + (index % 5) * 10}%`,
          }}
        />
      ))}

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

          {/* =====================================================
              LEFT ANIMATION
          ====================================================== */}

          <Animation/>

          {/* =====================================================
              FORM
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
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
                  Create Account
                </span>
              </div>

              <h1 className="text-2xl font-black tracking-tight md:text-3xl">
                Create Account
                <span className="text-[#DC2F02]">.</span>
              </h1>

              <p className="mt-1 text-xs text-gray-500">
                Create your secure portfolio admin account.
              </p>

            </div>

            {/* Card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-2xl md:p-6">

              <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DC2F02] to-transparent" />

              {/* Security Header */}
              <div className="mb-4 flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 p-2.5">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#DC2F02]/10 text-[#DC2F02]">
                  <ShieldCheck size={17} />
                </div>

                <div className="flex-1">

                  <p className="text-[11px] font-semibold text-gray-200">
                    Secure Registration
                  </p>

                  <p className="text-[9px] text-gray-600">
                    Authorized portfolio administration
                  </p>

                </div>

                <CircleCheck
                  size={15}
                  className="text-green-500/70"
                />

              </div>
              

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-3.5"
              >
                {authError && (
                 
                  <div className="mb-4 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-3.5 py-3 shadow-[0_0_20px_rgba(239,68,68,0.05)]">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                      <CircleAlert size={15} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-red-400">
                        Registration Failed
                      </p>

                      <p className="mt-0.5 break-words text-[10px] leading-4 text-red-300/80">
                        {authError}
                      </p>
                    </div>

                    </div>
                )}

                <div className="grid gap-3 sm:grid-cols-2">

                  <InputField
                    id="name"
                    name="name"
                    label="Full Name"
                    placeholder="Md. Khalekuzzaman"
                    icon={User}
                    required
                  />

                  <InputField
                    id="imageUrl"
                    name="imageUrl"
                    label="Profile Image URL"
                    type="url"
                    placeholder="https://..."
                    icon={User}
                  />

                </div>

                {/* Row 2 */}
                <div className="grid gap-3 sm:grid-cols-2">

                  <InputField
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="admin@example.com"
                    icon={Mail}
                    required
                  />

                  {/* Role */}
                  <div>

                    <label
                      htmlFor="role"
                      className="mb-1.5 block text-[10px] font-medium text-gray-400"
                    >
                      Role
                    </label>

                    <div className="relative">

                      <ShieldCheck
                        size={15}
                        className="absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-[#DC2F02]"
                      />

                      <select
                        id="role"
                        name="role"
                        defaultValue="admin"
                        className="h-10.5 w-full appearance-none rounded-xl border border-[#DC2F02]/20 bg-black/30 pl-10 pr-8 text-xs font-medium text-[#DC2F02] outline-none"
                      >
                        <option
                          value="admin"
                          className="bg-[#080808]"
                        >
                          Admin
                        </option>
                      </select>

                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[8px] text-gray-600">
                        ADMIN
                      </span>

                    </div>

                  </div>

                </div>

                {/* Password Row */}
                <div className="grid gap-3 sm:grid-cols-2">

                  {/* Password */}
                  <div className="relative">

                    <InputField
                      id="password"
                      name="password"
                      label="Password"
                      type={
                        showPassword
                          ? 'text'
                          : 'password'
                      }
                      placeholder="••••••••"
                      icon={Lock}
                      required
                      value={password}
                      onChange={handlePasswordChange}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute right-3 top-[29px] text-gray-500 transition hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff size={15} />
                      ) : (
                        <Eye size={15} />
                      )}
                    </button>

                  </div>

                  {/* Confirm Password */}
                  <div>

                    <div className="relative">

                      <InputField
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type={
                          showConfirmPassword
                            ? 'text'
                            : 'password'
                        }
                        placeholder="••••••••"
                        icon={Lock}
                        required
                        error={confirmPasswordError}
                        value={confirmPassword}
                        onChange={
                          handleConfirmPasswordChange
                        }
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
                        className="absolute right-3 top-[29px] text-gray-500 transition hover:text-white"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={15} />
                        ) : (
                          <Eye size={15} />
                        )}
                      </button>

                    </div>

                    {/* Error */}
                    {confirmPasswordError && (
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: -4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="mt-1 text-[10px] font-medium text-red-500"
                      >
                        Passwords do not match!
                      </motion.p>
                    )}

                    {/* Success */}
                    {passwordsMatch && (
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: -4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="mt-1 flex items-center gap-1 text-[10px] font-medium text-green-500"
                      >
                        <CircleCheck size={10} />
                        Passwords match
                      </motion.p>
                    )}

                  </div>

                </div>

                {/* Terms */}
                <label
                  htmlFor="terms"
                  className="flex cursor-pointer items-start gap-2 text-[9px] leading-4 text-gray-500"
                >

                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    value="accepted"
                    required
                    className="mt-0.5 h-3 w-3 accent-[#DC2F02]"
                  />

                  <span>
                    I agree to the{' '}
                    <span className="text-[#DC2F02]">
                      Terms & Conditions
                    </span>{' '}
                    and privacy policy.
                  </span>

                </label>

                {/* Submit Button */}
                <motion.button
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="group relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#DC2F02] text-xs font-bold shadow-[0_0_25px_rgba(220,47,2,0.18)] transition hover:bg-[#ef3b0a]"
                >

                  {/* Button Shine */}
                  <motion.span
                    animate={{
                      x: ['-150%', '150%'],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-y-0 w-20 skew-x-[-20deg] bg-white/10 blur-md"
                  />

                  <span className="relative z-10">
                    Create Admin Account
                  </span>

                  <ArrowRight
                    size={15}
                    className="relative z-10 transition-transform group-hover:translate-x-1"
                  />

                </motion.button>

              </form>

              {/* Login */}
              <div className="mt-4 border-t border-white/5 pt-4 text-center">

                <p className="text-[9px] text-gray-600">
                  Already have an account?
                </p>

                <Link
                  href="/auth/login"
                  className="mt-1 inline-flex items-center gap-1 text-[10px] font-medium text-[#DC2F02] transition hover:text-[#ef3b0a]"
                >
                  Continue to Login
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
};

export default Register;