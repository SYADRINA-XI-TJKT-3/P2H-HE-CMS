import { Routes, Route } from "react-router-dom";

// halaman dari fitur/pages
import RegisterPage from "../pages/RegisterPages";

// halaman homepage
import HomePage from "../pages/HomePages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/regist" element={<RegisterPage />} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
  );
}
