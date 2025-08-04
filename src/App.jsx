// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Router/Index";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;