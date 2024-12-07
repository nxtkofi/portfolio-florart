import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AboutMePage } from "./pages/AboutMePage";
import { ContactPage } from "./pages/ContactPage";
import { OrderPage } from "./pages/OrderPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PaintingsPage } from "./pages/PaintingsPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about-me"
            element={<AboutMePage children={undefined} />}
          />
          <Route
            path="/paintings"
            element={<PaintingsPage children={undefined} />}
          />
          <Route
            path="/portfolio"
            element={<PortfolioPage children={undefined} />}
          />
          <Route path="/order" element={<OrderPage children={undefined} />} />
          <Route
            path="/contact"
            element={<ContactPage children={undefined} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
