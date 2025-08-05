import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button_temp";
import Logo from "../assets/logo.png";
import authService from "../services/authServices";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email tidak valid!");
      return;
    }

    const dataforgotpassword = {
      email,
    };
    await authService.ForgotPassword(dataforgotpassword); 

    setSubmitted(true);
    setEmail("");
  };

  return (
    <div
      className="
        min-h-screen 
        flex items-center justify-center 
        bg-white
        md:bg-[url('/bg.jpg')]       
        md:bg-cover md:bg-center md:bg-no-repeat
      "
    >
      <div className="bg-white rounded-none w-[380px] h-[500px] px-[40px] py-[32px] shadow-[0_4px_15px_rgba(0,0,0,0.15)] max-w-sm">
        <img src={Logo} alt="logo" className="mx-auto" />
        <h2 className="text-neutral-800 text-[16px] mt-6 font-normal text-center">
          Content Management System
        </h2>
        <div className="h-[1px] w-full bg-[#E2E2E2] mt-6 mb-6"></div>

        {submitted ? (
          <div className="text-center mt-20">
            <h2 className="text-[16px] font-bold text-orange-600 mb-4">
              ✅ Reset link berhasil dikirim!
            </h2>
            <p className="text-[14px] text-neutral-600">
              Silakan cek email kamu untuk melanjutkan reset password.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-[16px] font-bold text-neutral-800 text-center">
              Forgot Password?
            </h2>
            <p className="text-[16px] font-normal text-neutral-600 text-center mb-6">
              Enter your email to reset your password
            </p>

            <form className="space-y-4 mb-3" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[16px] font-normal text-neutral-800 mb-2 mt-4"
                >
                  Company Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your company email"
                  className="mt-[6px] block w-full h-[48px] px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 border-gray-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={!(email.includes("@") && email.includes(".com"))}
              >
                Send Reset Link
              </Button>
            </form>
          </>
        )}

        <p className="text-center text-[16px] mt-4 font-normal text-neutral-600">
          ← Back to page{" "}
          <Link
            to="/login"
            className="text-neutral-800 text-[16px] mb-8 font-bold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
