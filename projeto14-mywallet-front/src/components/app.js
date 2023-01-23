import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Cadastro from "./cadastro";
import Home from "./home";
import Entrada from "./entrada";
import Saida from "./saida";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nova-entrada" element={<Entrada />} />
        <Route path="/nova-saida" element={<Saida />} />
      </Routes>
    </BrowserRouter>
  );
}
