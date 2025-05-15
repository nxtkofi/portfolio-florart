import { ShoppingCartIcon, UserIcon } from "lucide-react";
import { NavbarLinkType } from "./types";

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

export const SHOP_REGULATIONS: { header: string; subsections: string[] }[] = [
  {
    header: "Postanowienia ogólne",
    subsections: [
      "Sklep internetowy działający pod adresem [adres strony internetowej] prowadzony jest przez [Twoje imię i nazwisko / nazwa firmy], z siedzibą w [adres], NIP: [numer], REGON: [numer], e-mail: [adres e-mail].",
      "Niniejszy regulamin określa zasady korzystania ze sklepu, składania zamówień, zawierania umów sprzedaży, realizacji zamówień, form płatności, warunków dostawy oraz zasady zwrotów i reklamacji.",
      "Każdy klient przed złożeniem zamówienia zobowiązany jest zapoznać się z treścią regulaminu i zaakceptować jego postanowienia.",
    ],
  },
  {
    header: "Oferta i rodzaje produktów",
    subsections: [
      "W sklepie oferowane są: gotowe, ręcznie malowane obrazy, obrazy malowane na indywidualne zamówienie według wskazówek klienta, ceramiczne, ręcznie zrobione kubki i inne.",
      "Produkty są wykonywane ręcznie, dlatego mogą się nieznacznie różnić od przedstawionych zdjęć – każdy egzemplarz jest unikatowy.",
      "W przypadku zamówień indywidualnych klient ma możliwość pełnej personalizacji – określenia stylu, kolorystyki, tematyki, rozmiaru i innych szczegółów dzieła.",
    ],
  },
  {
    header: "Składanie zamówień",
    subsections: [
      "Zamówienia można składać za pośrednictwem: sklepu internetowego, wiadomości prywatnej przez media społecznościowe (Instagram, Facebook), e-maila.",
      "W przypadku zamówień indywidualnych kontakt z klientem odbywa się drogą mailową lub telefonicznie w celu ustalenia szczegółów projektu oraz terminu realizacji.",
      "W przypadku obrazów na zamówienie klient zobowiązany jest do uiszczenia zaliczki w wysokości 50% wartości zamówienia. Zaliczka jest bezzwrotna w przypadku rezygnacji z zamówienia po rozpoczęciu realizacji pracy.",
      "Dane do wpłaty zaliczki przesyłane są indywidualnie na adres e-mail klienta. Pozostała część kwoty płatna jest przed wysyłką dzieła.",
    ],
  },
  {
    header: "Ceny i metody płatności",
    subsections: [
      "Wszystkie ceny w sklepie podawane są w złotych polskich (PLN) i zawierają podatek VAT, jeśli jest naliczany.",
      "Sprzedawca zastrzega sobie prawo do zmiany cen produktów – zmiany nie dotyczą zamówień już złożonych.",
      "Klient może dokonać płatności za zamówienie w jeden z następujących sposobów: przelew tradycyjny na rachunek bankowy sprzedawcy, płatność online, płatność gotówką przy odbiorze osobistym.",
    ],
  },
  {
    header: "Realizacja zamówień i czas oczekiwania",
    subsections: [
      "Produkty dostępne „od ręki” wysyłane są w terminie do 5 dni roboczych od momentu zaksięgowania płatności.",
      "Realizacja obrazów na indywidualne zamówienie trwa zazwyczaj od jednego do czterech tygodni, w zależności od stopnia skomplikowania projektu. Termin realizacji jest ustalany indywidualnie z klientem.",
      "Po zakończeniu pracy klient otrzymuje zdjęcie gotowego dzieła do akceptacji. Po akceptacji wymagana jest dopłata pozostałej kwoty oraz następuje wysyłka.",
      "Sprzedawca zastrzega sobie prawo do publikacji zdjęcia wykonanego dzieła w portfolio oraz w mediach społecznościowych, z zachowaniem anonimowości klienta. W przypadku zastrzeżeń klient może poprosić o niepublikowanie zdjęcia.",
      "Sprzedawca zastrzega sobie prawo do wydłużenia czasu realizacji zamówienia w przypadku wystąpienia przyczyn niezależnych (np. choroba, opóźnienia dostaw, sytuacje losowe), o czym klient zostanie niezwłocznie poinformowany.",
    ],
  },
  {
    header: "Dostawa i wysyłka",
    subsections: [
      "Zamówienia realizowane są za pośrednictwem firm kurierskich (np. DPD, InPost) oraz do paczkomatów InPost – zgodnie z wyborem klienta.",
      "Możliwa jest również wysyłka zagraniczna – koszty i czas dostawy ustalane są indywidualnie. Obowiązuje oddzielny cennik wysyłek zagranicznych dostępny na stronie sklepu.",
      "Koszt dostawy pokrywa klient, chyba że oferta sklepu stanowi inaczej (np. darmowa dostawa od określonej kwoty).",
      "Odbiór osobisty możliwy jest po wcześniejszym umówieniu się drogą mailową lub telefoniczną.",
    ],
  },
  {
    header: "Prawo odstąpienia od umowy i zwroty",
    subsections: [
      "Klient ma prawo odstąpić od umowy zakupu produktu gotowego (np. obrazu dostępnego od ręki lub kubka) w terminie 14 dni od jego otrzymania, bez podania przyczyny.",
      "Aby skorzystać z prawa odstąpienia, klient powinien skontaktować się ze sprzedawcą mailowo oraz odesłać produkt na własny koszt na wskazany adres.",
      "Zwroty nie przysługują w przypadku produktów wykonanych na indywidualne zamówienie, zgodnie z art. 38 ustawy o prawach konsumenta.",
      "Zwrotowi podlegają jedynie produkty nieużywane, w stanie nienaruszonym.",
    ],
  },
  {
    header: "Reklamacje",
    subsections: [
      "W przypadku otrzymania uszkodzonego lub niezgodnego z zamówieniem produktu, klient ma prawo do złożenia reklamacji w terminie 14 dni od otrzymania przesyłki.",
      "Reklamację należy zgłosić mailowo, dołączając zdjęcia produktu i opis problemu.",
      "Reklamacje rozpatrywane są w ciągu 14 dni roboczych. Po uznaniu reklamacji produkt może zostać naprawiony, wymieniony lub zwrócony zostanie koszt jego zakupu.",
    ],
  },
  {
    header: "Ochrona danych osobowych",
    subsections: [
      "Dane osobowe klientów są przetwarzane zgodnie z przepisami RODO oraz zgodnie z Polityką Prywatności dostępną na stronie sklepu.",
      "Dane są wykorzystywane wyłącznie w celu realizacji zamówień, obsługi reklamacji i kontaktu z klientem.",
    ],
  },
  {
    header: "Prawa autorskie",
    subsections: [
      "Wszystkie obrazy i projekty oferowane w sklepie są chronione prawem autorskim i stanowią własność intelektualną [Twoje imię i nazwisko / nazwa firmy].",
      "Zabrania się kopiowania, powielania, rozpowszechniania, drukowania, publikowania lub wykorzystywania w jakiejkolwiek formie grafik, zdjęć, opisów i innych treści znajdujących się na stronie sklepu bez wyraźnej, pisemnej zgody właściciela.",
      "Zakup dzieła (np. obrazu) nie oznacza nabycia praw do jego dalszego komercyjnego wykorzystania, np. w celach marketingowych, promocyjnych, do druku na odzieży itp., bez odrębnej licencji udzielonej przez autora.",
      "Wszelkie naruszenia praw autorskich będą zgłaszane i egzekwowane zgodnie z obowiązującym prawem.",
    ],
  },
  {
    header: "Udzielenie licencji i komercyjne wykorzystanie dzieł",
    subsections: [
      "Zakup obrazu lub innego dzieła w sklepie nie oznacza przeniesienia majątkowych praw autorskich ani udzielenia licencji do jego dalszego, komercyjnego wykorzystywania.",
      "Wszelkie formy użycia dzieła do celów innych niż prywatne, w szczególności: publikacja w mediach (drukowanych lub internetowych), wykorzystanie w kampaniach promocyjnych, reklamowych, brandingowych, reprodukcja, druk na produktach (odzież, plakaty, kalendarze itp.), użycie jako logo lub element identyfikacji wizualnej marki wymagają odrębnego porozumienia i uzyskania pisemnej zgody autora.",
      "Na wniosek klienta istnieje możliwość udzielenia odpłatnej licencji na wybrane dzieło, określającej zakres wykorzystania oraz czas obowiązywania licencji.",
      "Brak zawarcia umowy licencyjnej oznacza, że klient ma wyłącznie prawo do prywatnego korzystania z dzieła (np. do powieszenia obrazu we własnym mieszkaniu, biurze, wręczenia w prezencie).",
    ],
  },
  {
    header: "Postanowienia końcowe",
    subsections: [
      "Regulamin dostępny jest na stronie internetowej sklepu.",
      "Sprzedawca zastrzega sobie prawo do zmiany regulaminu – zmiany nie wpływają na zamówienia złożone przed datą ich wprowadzenia.",
      "W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego.",
    ],
  },
];
