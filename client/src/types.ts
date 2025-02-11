export type NavbarLinkType = { header: string; path: string };
export type ItemType = {
  id: string;
  title: string;
  price: number;
  photo: string;
  subtitle: string;
  instagramLink?: string;
  /* path: string; */
};

export type FormErrorsType = {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
};

