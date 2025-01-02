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
    id: "124-bbsgd",
    title: "Lodowiec",
    price: 140.0,
    photo: (
      <img className="zoomed-image" src="/2.Obrazy/Lodowiec/IMG_0907.JPG" />
    ),
    subtitle: "Akryl na płótnie\n50x70[cm]",
    instagramLink: "https://www.instagram.com/p/CVJ9J9vI1Zv/",
  },
  {
    id: "124-bbsgc",
    title: "Odpływ",
    price: 330.0,
    photo: <img className="zoomed-image" src="/2.Obrazy/Odpływ/IMG_0896.JPG" />,
    subtitle: "Akryl na płótnie\n50x70[cm]",
    instagramLink: "https://www.instagram.com/p/CVJ9J9vI1Zv/",
  },
  {
    id: "124-bbsgx",
    title: "Linia",
    price: 90.0,
    photo: <img className="zoomed-image" src="/2.Obrazy/Linia/IMG_0908.JPG" />,
    subtitle: "Akryl na płótnie\n50x70[cm]",
  },
  {
    id: "124-bbsgm",
    title: "Plastikowe Żółwie",
    price: 2300.0,
    photo: (
      <img
        className="zoomed-image"
        src="/2.Obrazy/Plastikowe_żółwie/IMG_0916.JPG"
      />
    ),
    subtitle: "Akryl na płótnie\n50x70[cm]",
  },
  {
    id: "124-bbsga",
    title: "Śnieżka",
    price: 2300.0,
    photo: (
      <img className="zoomed-image" src="/2.Obrazy/Śnieżka/IMG_0919.JPG" />
    ),
    subtitle: "Akryl na płótnie\n50x70[cm]",
  },
];
