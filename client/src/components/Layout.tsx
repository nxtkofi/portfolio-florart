import { ReactElement } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import AnimatedOutlet from "./AnimatedOutlet";

export default function Layout(): ReactElement {
  return (
    <div>
      <Navbar />
      <AnimatedOutlet />
      <Footer />
    </div>
  );
}
