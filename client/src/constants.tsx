import { ItemsType, NavbarLinkType } from "./types";

export const NAVBAR_LINKS: NavbarLinkType[] = [
  {
    header: "O mnie",
    path: "/about-me",
  },
  {
    header: "Obrazy",
    path: "/paintings",
  },
  { header: "Portfolio", path: "/portfolio" },
  {
    header: "Zamówienie",
    path: "/order",
  },
  {
    header: "Kontakt",
    path: "/contact",
  },
];
export const ITEMS: ItemsType[] = [
  {
    title: "Lodowiec",
    price: 140.0,
    photo: (
      <>
        <img src={"/lodowiec.jpg"} width={600} height={800} />
      </>
    ),
  },
  {
    title: "Odpływ",
    price: 330.0,
    photo: (
      <>
        <img src={"/odplyw.jpg"} width={600} height={800} />
      </>
    ),
  },
  {
    title: "Linia",
    price: 90.0,
    photo: (
      <>
        <img src={"/line.jpg"} width={600} height={800} />
      </>
    ),
  },
  {
    title: "Plastikowe Żółwie",
    price: 2300.0,
    photo: (
      <>
        <img src={"/plastikowe.jpg"} width={600} height={800} />
      </>
    ),
  },
  {
    title: "Śnieżka",
    price: 2300.0,
    photo: (
      <>
        <img src={"/sniezka.jpg"} width={600} height={800} />
      </>
    ),
  },
  {
    title: "Vangog",
    price: 2299.99,
    photo: (
      <>
        <img src={"/vangog.webp"} />
      </>
    ),
  },
];
