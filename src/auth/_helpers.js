import { getData, setData } from "@/utils";
const AUTH_LOCAL_STORAGE_KEY = `${import.meta.env.VITE_APP_NAME}-auth-v${import.meta.env.VITE_APP_VERSION}`;
const getAuth = () => {
  try {
    const auth = getData(AUTH_LOCAL_STORAGE_KEY);
    if (auth) {
      return auth;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("AUTH LOCAL STORAGE PARSE ERROR", error);
  }
};
const setAuth = (auth) => {
  setData(AUTH_LOCAL_STORAGE_KEY, auth);
};
const removeAuth = () => {
  if (!localStorage) {
    return;
  }
  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
  } catch (error) {
    console.error("AUTH LOCAL STORAGE REMOVE ERROR", error);
  }
};
export function setupAxios(axios) {
  axios.defaults.headers.Accept = "application/json";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiUHJvZml0Rm9saW8iLCJpYXQiOjE3Mzc1NDQwMDEsImV4cCI6MTczOTI3MjAwMSwiYXVkIjoiYTQwZTIwNDgtMTRkOS01MjY0LWIzMjgtNWRlYWQzMTk3YzM4IiwiaXNzIjoiUHJvZml0Rm9saW8ifQ.vA8HQpbZ42U8KqHrWb2PB8-8WGytc5Pa5WpnQP_KeUo";
  axios.interceptors.request.use(
    (config) => {
      const auth = getAuth();
      if (auth?.access_token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    async (err) => await Promise.reject(err)
  );
}
export { AUTH_LOCAL_STORAGE_KEY, getAuth, removeAuth, setAuth };
