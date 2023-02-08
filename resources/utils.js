const categoriesObjects = {
  Chromebooks: {
    name: "Chromebooks",
    url: "/chromebooks",
  },
  GoogleChrome: {
    name: "Google Chrome",
    url: "/chrome-browser",
  },
  Gaming: {
    name: "Jogos",
    url: "/gaming",
  },
  ChromeOS: {
    name: "ChromeOS",
    url: "/chrome-os",
  },
  Programming: {
    name: "Programação",
    url: "/programming",
  },
};

const categories = [
  "Chromebooks",
  "GoogleChrome",
  "Gaming",
  "ChromeOS",
  "Programming",
];

export const SITE_NAME = "Portal Chrome";
export const SITE_DOMAIN = "https://portalchrome.com.br";
export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/dmi1iu1wi/image/upload/v1675439149/ogImage_gyrg36.png";

export const DateFormate = (unFormatedDate) => {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const date = new Date(unFormatedDate);
  const formated = new Intl.DateTimeFormat("pt-br", options).format(date);

  return formated;
};

export const InsertAttrToAnchorTag = () => {
  const links = document.querySelectorAll("#post__content a");

  links.forEach((link) => {
    if (link.href.includes("localhost") || link.href.includes("portalchrome")) {
      link.target = "_self";
      return;
    }
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
};

export const DeviceCheck = () => {
  const windowScreenDetector = typeof window !== "undefined";
  return {
    isMobile: windowScreenDetector && window.innerWidth <= 767,
    isTablet:
      windowScreenDetector &&
      window.innerWidth >= 768 &&
      window.innerWidth <= 1024,
    isDesktop: windowScreenDetector && window.innerWidth > 1024,
  };
};

export const CurrentCategory = (category) => categoriesObjects[category];

export const RandomSelectCategory = () => {
  const randomNumber = Math.random() * categories.length;
  return categories[Math.floor(randomNumber)];
};
