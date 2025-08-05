import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Logo from "../assets/logo.png";
import auth from "../services/authServices";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isFormValid =
    email &&
    password &&
    confirmPassword &&
    password === confirmPassword &&
    password.length >= 6;

  const onSubmit = async () => {
    const dataRegister = {
      email,
      password,
    };
    await auth.RegisterPage(dataRegister);
    // Navigasi ke login bisa ditambah kalau mau
  };

  return (
    <div
      className="min-h-screen 
      flex items-center justify-center 
      bg-white 
      md:bg-[url('/bg.jpg')]
      md:bg-cover md:bg-center md:bg-no-repeat"
    >
      <div className="bg-white px-10 py-8 shadow-[0_4px_15px_rgba(0,0,0,0.15)] sm:shadow-none w-[380px] h-[644px] max-w-md rounded-none">
        <div className="text-center mb-6">
          <img src={Logo} alt="Logo" className="mx-auto" />
          <p className="text-[16px] text-[#1E1E1E] mt-4">
            Content Management System
          </p>
        </div>

        <div className="h-[1px] w-full bg-[#E2E2E2] my-6"></div>

        <h2 className="text-base font-semibold mb-6 mt-6">
          Create your account
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="text-[14px] block mb-2">
              Company Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your company email"
              className="w-full border border-gray-300 px-3 py-4 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="relative">
            <label className="text-sm text-[14px] block mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border mt-[2px] border-gray-300 px-3 py-4 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {password && password.length < 6 && (
              <span className="absolute text-xs text-red-500 mt-1 left-0 mx-1 top-full">
                Password minimal 6 karakter
              </span>
            )}
            {password && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-9 right-2 mt-4 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  // Icon mata buka
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24"
                    height="24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  // Icon mata tertutup
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24"
                    height="24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.96 9.96 0 012.186-3.341m1.493-1.356A9.953 9.953 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.957 9.957 0 01-4.676 5.174M3 3l18 18"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>

          <div className="relative">
            <label className="text-[14px] block mb-1 mt-5">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full border mt-[4px] border-gray-300 px-3 py-4 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {password !== confirmPassword && (
              <span className="absolute text-xs text-red-500 mt-1 left-0 top-full">
                Incorrect Password.
              </span>
            )}
            {confirmPassword && (
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-9 right-2 mt-4 transform -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? (
                  // Icon mata buka
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24"
                    height="24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  // Icon mata tertutup
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24"
                    height="24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.96 9.96 0 012.186-3.341m1.493-1.356A9.953 9.953 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.957 9.957 0 01-4.676 5.174M3 3l18 18"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>

          <Button
            disabled={!isFormValid}
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            >
              SIGN UP
              </Button>

        </form>

        <p className="text-center text-[16px] text-[#8F8F8F] mt-0.5 mb-1">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-black font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
