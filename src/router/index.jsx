import {Routes, Route } from "react-router-dom";
import ForgotPasswordPages from "../Pages/ForgotPasswordPages";
import HomePages from "../Pages/HomePages";
import RegisterPage from "../pages/RegisterPages";
import LoginPages from "../Pages/LoginPages"

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/forgot" element={<ForgotPasswordPages />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

