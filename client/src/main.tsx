import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AboutMePage } from "./pages/AboutMePage";
import { ContactPage } from "./pages/ContactPage";
import { OrderPage } from "./pages/OrderPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PaintingsPage } from "./pages/PaintingsPage";
import { AnimatedLayout } from "./components/AnimatedLayout";
import { AnimationDirProvider } from "./context/AnimationDirContext";
import { ProductPage } from "./pages/ProductPage";
import { PopUpProvider } from "./context/PopUpContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <AnimationDirProvider>
        <PopUpProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <AnimatedLayout>
                    <HomePage />
                  </AnimatedLayout>
                }
              />
              <Route
                path="/about-me"
                element={
                  <AnimatedLayout>
                    <AboutMePage children={undefined} />
                  </AnimatedLayout>
                }
              />
              <Route
                path="/paintings"
                element={
                  <AnimatedLayout>
                    <PaintingsPage children={undefined} />
                  </AnimatedLayout>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <AnimatedLayout>
                    <PortfolioPage children={undefined} />
                  </AnimatedLayout>
                }
              />
              <Route
                path="/order"
                element={
                  <AnimatedLayout>
                    <OrderPage children={undefined} />
                  </AnimatedLayout>
                }
              />
              <Route
                path="/contact"
                element={
                  <AnimatedLayout>
                    <ContactPage children={undefined} />
                  </AnimatedLayout>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <AnimatedLayout>
                    <ProductPage />
                  </AnimatedLayout>
                }
              />
            </Route>
          </Routes>
        </PopUpProvider>
      </AnimationDirProvider>
    </HashRouter>
  </StrictMode>,
);
