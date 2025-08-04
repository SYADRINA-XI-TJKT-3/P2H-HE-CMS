import { Routes, Route } from "react-router-dom";
import LoginPages from "../Pages/LoginPages";
import HomePages from "../Pages/HomePages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPages />} />
      <Route path="/" element={<HomePages />} />
    </Routes>
  );
}