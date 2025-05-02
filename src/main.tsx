import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import { One } from "./Pages/One";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/one" element={<One />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
