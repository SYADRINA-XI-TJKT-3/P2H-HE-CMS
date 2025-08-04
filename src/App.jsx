// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router"; // <- pakai versi master (karena folder kamu namanya 'router')

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
