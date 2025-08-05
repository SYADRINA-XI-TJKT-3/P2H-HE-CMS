import { Routes, Route } from "react-router-dom";
import ForgotPasswordPages from "../pages/ForgotPasswordPages";
import HomePages from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPages";
import LoginPages from "../pages/LoginPages";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPages />} />
      <Route path="/login" element={<LoginPages />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}