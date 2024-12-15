import { ItemType, NavbarLinkType } from "./types";

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

export const ITEMS: ItemType[] = [
  {
    title: "Lodowiec",
    price: 140.0,
    photo: (
      <img className="zoomed-image" src="/2.Obrazy/Lodowiec/IMG_0907.JPG" />
    ),
  },
  {
    title: "Odpływ",
    price: 330.0,
    photo: <img className="zoomed-image" src="/2.Obrazy/Odpływ/IMG_0896.JPG" />,
  },
  {
    title: "Linia",
    price: 90.0,
    photo: <img className="zoomed-image" src="/2.Obrazy/Linia/IMG_0908.JPG" />,
  },
  {
    title: "Plastikowe Żółwie",
    price: 2300.0,
    photo: (
      <img
        className="zoomed-image"
        src="/2.Obrazy/Plastikowe_żółwie/IMG_0916.JPG"
      />
    ),
  },
  {
    title: "Śnieżka",
    price: 2300.0,
    photo: (
      <img className="zoomed-image" src="/2.Obrazy/Śnieżka/IMG_0919.JPG" />
    ),
  },
];
