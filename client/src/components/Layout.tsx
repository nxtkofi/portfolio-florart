import { type ReactElement } from "react";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export default function Layout(): ReactElement {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
