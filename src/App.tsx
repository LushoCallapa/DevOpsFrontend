import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Agrega más rutas aquí */}
      </Routes>
    </BrowserRouter>
  );
}