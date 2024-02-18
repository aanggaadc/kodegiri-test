export const RE_DIGIT = new RegExp(/^\d+$/);

export const voucherNavigation = [
  {
    name: "General",
    id: "general",
  },
  {
    name: "Benefit",
    id: "benefit",
  },
  {
    name: "How to Get",
    id: "howToGet",
  },
  {
    name: "Term and Conditions",
    id: "termsCondition",
  },
  {
    name: "Another Promo",
    id: "anotherPromo",
  },
];

export const headerMenu = [
  {
    id: 1,
    name: "home",
    path: "/",
    icon: "/assets/icons/home.svg",
    iconActive: "/assets/icon/home-active.svg",
  },
  {
    id: 2,
    name: "history",
    path: "/history",
    icon: "/assets/icons/calendar.svg",
    iconActive: "/assets/icon/calendar-active.svg",
  },
  {
    id: 3,
    name: "inbox",
    path: "/inbox",
    icon: "/assets/icons/message.svg",
    iconActive: "/assets/icon/message.svg",
  },
  {
    id: 4,
    name: "profile",
    path: "/profile",
    icon: "/assets/icons/profile.svg",
    iconActive: "/assets/icon/profile.svg",
  },
];

export const categoryMenu = [
  {
    id: 1,
    name: "Latest Promo",
    path: "/",
    icon: "",
  },
  {
    id: 2,
    name: "Popular Merchant",
    path: "/",
    icon: "",
  },
  {
    id: 3,
    name: "Popular Rewards",
    path: "/",
    icon: "",
  },
];

export const socialMediaList = [
  {
    id: 1,
    name: "twitter",
    path: "https://www.twitter.com",
    icon: "/assets/icons/twitter.svg",
  },
  {
    id: 2,
    name: "linkedin",
    path: "https://www.linkedin.com",
    icon: "/assets/icons/linkedin.svg",
  },
  {
    id: 3,
    name: "facebook",
    path: "https://www.facebook.com",
    icon: "/assets/icons/facebook.svg",
  },
];

export const footerBottomMenu = [
  {
    id: 1,
    name: "Política de Privacidad",
    path: "/",
    icon: "",
  },
  {
    id: 2,
    name: "Términos y Condiciones",
    path: "/",
    icon: "",
  },
  {
    id: 3,
    name: "Código de Conducta",
    path: "/",
    icon: "",
  },
];

export const dataTable = [
  {
    id: 1,
    name: "Starbucks",
    icon: "/assets/images/company/1.png",
    date: "25 December 2023",
    time: "10:24",
    point: 50,
  },
  {
    id: 2,
    name: "Circooles",
    icon: "/assets/images/company/2.png",
    date: "22 December 2023",
    time: "14:00",
    point: 73,
  },
  {
    id: 3,
    name: "Command+R",
    icon: "/assets/images/company/3.png",
    date: "15 December 2023",
    time: "22:00",
    point: 103,
  },
  {
    id: 4,
    name: "Hourglass",
    icon: "/assets/images/company/4.png",
    date: "2 December 2023",
    time: "19:45",
    point: 50,
  },
  {
    id: 5,
    name: "Layers",
    icon: "/assets/images/company/5.png",
    date: "29 November 2023",
    time: "15:19",
    point: 50,
  },
  {
    id: 6,
    name: "Quotient",
    icon: "/assets/images/company/6.png",
    date: "12 November 2023",
    time: "07:23",
    point: 100,
  },
  {
    id: 7,
    name: "Quotient",
    icon: "/assets/images/company/7.png",
    date: "12 November 2023",
    time: "12:00",
    point: 97,
  },
];

export const excludedPath = ["/signin", "/register"];

export const merchantListData = [
  {
    id: 1,
    name: "Pizza Hut",
    image: "/assets/images/merchants/pizza-hut.png",
  },
  {
    id: 2,
    name: "Starbucks",
    image: "/assets/images/merchants/starbucks.png",
  },
  {
    id: 3,
    name: "McDonald's",
    image: "/assets/images/merchants/mcd.png",
  },
  {
    id: 4,
    name: "Domino's Pizza",
    image: "/assets/images/merchants/domino-pizza.png",
  },
  {
    id: 5,
    name: "KFC",
    image: "/assets/images/merchants/kfc.png",
  },
  {
    id: 6,
    name: "HokBen",
    image: "/assets/images/merchants/hokben.png",
  },
];

export const rewardCategories = [
  {
    id: 1,
    name: "All",
    icon: "",
  },
  {
    id: 2,
    name: "Food",
    icon: "/assets/icons/burger.png",
  },
  {
    id: 3,
    name: "Groceries",
    icon: "/assets/icons/groceries.png",
  },
  {
    id: 4,
    name: "Beverages",
    icon: "/assets/icons/drink.png",
  },
];

export const rewardList = [
  {
    id: 1,
    name: "Monday Mood Booster Starbucks",
    image: "/assets/images/rewards/starbucks.jpg",
    brandLogo: "/assets/images/merchants/starbucks.png",
    brandName: "Starbucks",
    point: 250,
  },
  {
    id: 2,
    name: "KFC Value Serbu",
    image: "/assets/images/rewards/kfc.jpg",
    brandLogo: "/assets/images/merchants/kfc.png",
    brandName: "KFC",
    point: 172,
  },
  {
    id: 3,
    name: "Poromo PASTISEGAR",
    image: "/assets/images/rewards/segari.jpg",
    brandLogo: "/assets/images/merchants/segari.png",
    brandName: "Segari",
    point: 104,
  },
  {
    id: 4,
    name: "Domino’s: All i want for Christmas",
    image: "/assets/images/rewards/domino.jpg",
    brandLogo: "/assets/images/merchants/domino-pizza.png",
    brandName: "Domino's Pizza",
    point: 53,
  },
  {
    id: 5,
    name: "HokBen: Pay Day",
    image: "/assets/images/rewards/hokben.jpg",
    brandLogo: "/assets/images/merchants/hokeben.png",
    brandName: "HokBen",
    point: 147,
  },
  {
    id: 6,
    name: "SENIN HEMAT",
    image: "/assets/images/rewards/paper-lunch.jpg",
    brandLogo: "/assets/images/merchants/paper-lunch.png",
    brandName: "Paper Lunch",
    point: 104,
  },
  {
    id: 7,
    name: "Weekend SALE!",
    image: "/assets/images/rewards/matahari.jpg",
    brandLogo: "/assets/images/merchants/matahari.png",
    brandName: "Matahari",
    point: 74,
  },
  {
    id: 8,
    name: "HARMANAS",
    image: "/assets/images/rewards/kopi-kenangan.jpg",
    brandLogo: "/assets/images/merchants/kopi-kenangan.png",
    brandName: "Kopi Kenangan",
    point: 87,
  },
];
