import {Routes, Route } from "react-router-dom";
import ForgotPasswordPages from "../Pages/ForgotPasswordPage"; // gunakan path relatif yang sesuai
import HomePages from "../Pages/HomePages";

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/forgot" element={<ForgotPasswordPages />} />
    </Routes>
  );
}

