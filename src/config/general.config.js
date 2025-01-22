const { BACKEND_URL,VITE_BACKEND_URL } = import.meta.env;

const generalSettings = {
  purchaseLink: "https://1.envato.market/Vm7VRE",
  devsLink: "https://devs.keenthemes.com",
  faqLink: "https://keenthemes.com/metronic",
  aboutLink: "https://keenthemes.com/metronic",
};

const link = {
  backendLink: VITE_BACKEND_URL,
};
export { generalSettings, link };
