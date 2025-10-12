import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
