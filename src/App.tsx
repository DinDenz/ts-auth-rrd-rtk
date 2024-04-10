import Homepage from "pages/Homepage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import React from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
  );
}
