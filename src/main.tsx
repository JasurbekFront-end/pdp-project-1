import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Questions from "./pages/questions/questions";
import Evaluation from "./pages/evaluation/evaluation";
import Results from "./pages/results/results";
import Navbar from "./components/navbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/questions/evaluation" element={<Evaluation />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
