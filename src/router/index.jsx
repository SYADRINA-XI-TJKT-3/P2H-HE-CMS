import { Routes, Route } from "react-router-dom";
import LoginPages from "../Pages/LoginPages";
import HomePages from "../Pages/HomePages";
import RegisterPage from "../pages/RegisterPages";
import { ForgotPassword } from "../api/apiUrls";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPages />} />
      <Route path="/" element={<HomePages />} />
<Route path="/register" element={<RegisterPage/>} />
      <Route path="/forgot" element={<ForgotPassword/>} />
          </Routes>
  );
}