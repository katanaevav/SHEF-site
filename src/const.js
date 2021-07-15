export const Links = {
  APP_STORE_LINNK: `https://www.apple.com/ru/app-store/`,
  GOOGLE_PLAY_LINK: `https://play.google.com/store/apps`,
  INSTAGRAM_LINK: `https://www.instagram.com/chefhere.ru/`,
  PHONE_SHOW: `+7 926 296 36 18`,
  PHONE_LINC:  `tel:+79262963618`,
  EMAIL_SHOW: `office@jscorp.ru`,
  EMAIL_LINK: `mailto:office@jscorp.ru`,
  LOCAL_BURDER_APP_LINK: `https://www.localburgerco.com/app`,
  JSCORP_LINK: `https://jscorp.ru/startups/`,

  STUFF_POINTS: `/stuff_points/`,
  ORDERS: `/orders/`,

  LINK_EMAIL_REQUEST: `/web/link_request/`,
  LINK_CONSULTATION_REQUEST: `/web/consultation_request/`,
  LINK_CONTACTUS_REQUEST: `/web/contact_us/`,
};

export const SavingStatus = {
  SUCCESS: `SUCCESS`,
  FAIL: `FAIL`,
};

export const MenuCategory = {
  EMPTY: 0,
  CATERING: 1,
  ONLINE_COOKING: 2,
  NO_GLUTEN: 3,
};

export const MenuCategoryProps = [
  {
    id: 0,
    name: `Ваша корзина`,
    minCoast: 0,
  },
  {
    id: 1,
    name: `Кейтеринг`,
    minCoast: 4900,
  },
  {
    id: 2,
    name: `Онлайн кулинария`,
    minCoast: 2900,
  },
  {
    id: 3,
    name: `Без глютена`,
    minCoast: 3000,
  },
];

export const PoliticsTexts = {
  HIDE: 0,
  PRIVACY_POLICY: 1,
  USE_POLICY: 2,
  COOKIES: 3,
  OFER_POLICY: 4,
}

export const StatusWindowState = {
  NO_STATUS: 0,
  SUCCESS: 1,
  ERROR: 2,
}

export const AppRoute = {
  ROOT: `/`,
  LINK_TO_APPS: `/`,
  ONLINE_COOKING: `/online-cooking`,
  CATERING: `/catering`,
  NO_GLUTEN: `/no-gluten`,
  CART: `/cart`,
  PAY_SUCCESS: `/sp`,
  PAY_ERROR: `/ep`,
};
