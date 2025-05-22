import React from "react";

import Navbar from "./nav";
import Product from "./product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./home";

export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
