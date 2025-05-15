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
import { AnimatedLayout } from "./components/AnimatedLayout";
import { AnimationDirProvider } from "./context/AnimationDirContext";
import { ProductPage } from "./pages/ProductPage";
import { PopUpProvider } from "./context/PopUpContext";
import { ItemsProvider } from "./context/ItemsContext";
import { ROUTE_STORE_POLICY } from "./helpers/routes";
import { StorePolicyPage } from "./pages/StorePolicyPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AnimationDirProvider>
        <ItemsProvider>
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
                    <AboutMePage  />
                  </AnimatedLayout>
                }
              />
              <Route
                path="/paintings"
                element={
                  <AnimatedLayout>
                    <PaintingsPage  />
                  </AnimatedLayout>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <AnimatedLayout>
                    <PortfolioPage  />
                  </AnimatedLayout>
                }
              />
              <Route
                path="/order"
                element={
                  <AnimatedLayout>
                    <OrderPage  />
                  </AnimatedLayout>
                }
              />
              <Route
                path="/contact"
                element={
                  <AnimatedLayout>
                    <ContactPage  />
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
              <Route
                path={ROUTE_STORE_POLICY}
                element={
                  <AnimatedLayout>
                    <StorePolicyPage />
                  </AnimatedLayout>
                }
              />
            </Route>
          </Routes>
        </PopUpProvider>
        </ItemsProvider>
      </AnimationDirProvider>
    </BrowserRouter>
  </StrictMode>,
);
