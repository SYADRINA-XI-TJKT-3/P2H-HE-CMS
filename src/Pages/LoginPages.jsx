import { useState } from "react";
import Button from "../components/Button";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import auth from "../services/authServices";


export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");

  const isFormValid =
  email &&
  password &&
  password.length >= 6;

const onSubmit = async () => {
  const dataLogin = {
    email,
    password,
  };
    await auth.LoginPages(dataLogin);
    // console.log(bodyReq);
  }

  return (
    <>
      <div
        className="min-h-screen 
        flex items-center justify-center 
        bg-white                   
        md:bg-[url('bg.jpg')]      
        md:bg-cover md:bg-center md:bg-no-repeat
"
      >
        <div className="bg-white rounded-none  shadow-md max-w-md w-[380px] h-[620px] py-9 px-10 ">
          <img src={Logo} alt="Logo" className=" mx-auto" />
          <h2 className="text-[16px] text-center text-[#1E1E1E] mt-4 ">
            Content Management System
          </h2>
          <div className="w-[300-fill] h-[1px] bg-[#E2E2E2] my-6"></div>
          <h2 className="text-[16px] font-semibold  text-[#1E1E1E] mb-6">
            Login to your account{" "}
          </h2>
          <form className="space-y-0">
            <div>
              <label
                htmlFor="email"
                className="text-[14px] text-center  text-[#1E1E1E]"
              >
                Company Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your company email"
                className="w-[300px] h-12 px-3 mt-2 mb-4 border-2 text-[14px] text-[#8F8F8F] border-[#E2E2E2] rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <label className="text-[14px] font-normal text-center text-[#1E1E1E]">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-[300px] h-12 px-3 mt-2 mb-none border-2 text-[14px] text-[#8F8F8F] border-[#E2E2E2] rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {password && password.length < 6 && (
                <p className="text-red-500 text-xs mb-2">Password minimal 6 karakter</p>
              )
              }
              {password && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-9 right-3 mt-5 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
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
                    // Ikon Mata Dicoret
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
            <div className="flex items-center justify-between mt-3 mb-5">
              {/* Kiri: Checkbox + Label */}
              <label
                htmlFor="remember"
                className="flex items-center gap-2 text-sm text-[#1E1E1E]"
              >
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 accent-[#FD5000] text-[#1E1E1E] h-4"
                />
                Remember me
              </label>

              {/* Kanan: Forgot password */}
              <a href="#" className="text-[#1E1E1E] text-sm hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              label="LOGIN"
              disabled={!isFormValid}
              onClick={(e) => {
                e.preventDefault();
                console.log("Login diklik");
                onSubmit()
              }}
            />
          </form>

          <p className="text-sm text-center text-[16px] text-[#8F8F8F]">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-gray-900 mb-8 text-[16px] font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
          {/* <p className="text-center text-[16px] text-[#8F8F8F] mt-9">
            <Link to="/home" className="text-white font-medium hover:underline">
            Ke Home
            </Link>
            </p> */}
        </div>
      </div>
    </>
  );
}