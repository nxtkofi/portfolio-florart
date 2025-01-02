import { ReactNode } from "react";

export type NavbarLinkType = { header: string; path: string };
export type ItemType = {
  id: string;
  title: string;
  price: number;
  photo: ReactNode;
  subtitle: string;
  instagramLink?: string;
  /* path: string; */
};
