import { ReactNode } from "react";

export type NavbarLinkType = {
  header: ReactNode;
  path: string;
  key: string;
  desktopOnly?: boolean;
};

export type FormErrorsType = {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
};

export type FormValuesType = {
  name: string;
  email: string;
  message?: string;
  phone?: string;
};
