import { ShoppingCartIcon, UserIcon } from "lucide-react";
import { NavbarLinkType } from "./types";
import { ItemType } from "./context/ItemsContext";

export const NAVBAR_LINKS: NavbarLinkType[] = [
  {
    header: "O mnie",
    key: "about-me",
    path: "/about-me",
  },
  {
    header: "Obrazy",
    key: "paintings",
    path: "/paintings",
  },
  { header: "Portfolio", path: "/portfolio", key: "portfolio" },
  {
    header: "Zamówienie",
    key: "order",
    path: "/order",
  },
  {
    header: "Kontakt",
    key: "contact",
    path: "/contact",
  },
  {
    header: <UserIcon strokeWidth={1.5} size={24} />,
    key: "account",
    desktopOnly: true,
    path: "/account",
  },
  {
    header: <ShoppingCartIcon strokeWidth={1.5} size={24} />,
    key: "cart",
    desktopOnly: true,
    path: "/cart",
  },
];

// export const ITEMS: ItemType[] = [
//   {
//     id: "1",
//     slug: "lodowiec",
//     title: "Lodowiec",
//     price: 140.0,
//     images: [{ id: 1, url: "/2.Obrazy/Lodowiec/IMG_0907.JPG" }],
//     material: "Akryl na płótnie",
//     dimensions: "50x70",
//     instagramLink: "https://www.instagram.com/p/CVJ9J9vI1Zv/",
//   },
//   {
//     id: "2",
//     slug: "odplyw",
//     title: "Odpływ",
//     price: 330.0,
//     images: [{ id: 1, url: "/2.Obrazy/Odpływ/IMG_0896.JPG" }],
//     material: "Akryl na płótnie",
//     dimensions: "50x70",
//     instagramLink: "https://www.instagram.com/p/CVJ9J9vI1Zv/",
//   },
//   {
//     id: "3",
//     slug: "linia",
//     title: "Linia",
//     price: 90.0,
//     images: [{ id: 1, url: "/2.Obrazy/Linia/IMG_0908.JPG" }],
//     material: "Akryl na płótnie",
//     dimensions: "50x70",
//   },
//   {
//     id: "4",
//     slug: "plastikowe-zolwie",
//     title: "Plastikowe Żółwie",
//     price: 2300.0,
//     images: [{ id: 1, url: "/2.Obrazy/Plastikowe_żółwie/IMG_0916.JPG" }],
//     material: "Akryl na płótnie",
//     dimensions: "50x70",
//   },
//   {
//     id: "5",
//     slug: "sniezka",
//     title: "Śnieżka",
//     price: 2300.0,
//     images: [{ id: 1, url: "/2.Obrazy/Śnieżka/IMG_0919.JPG" }],
//     material: "Akryl na płótnie",
//     dimensions: "50x70",
//   },
// ];
