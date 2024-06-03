import axios, { AxiosInstance, type AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const requestor: AxiosInstance = axios.create(axiosRequestConfig);

requestor.interceptors.request.use((config) => {
  if (config.headers.Authorization) return config;

  const accessToken = Cookies.get("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

requestor.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = Cookies.get("refreshToken");
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      refreshToken
    ) {
      const res = await requestor.post(
        "/auth/tokens",
        {},
        {
          headers: { Authorization: `Bearer ${refreshToken}`, _retry: true },
        },
      );
      const accessToken = res.data.accessToken;
      const nextRefreshToken = res.data.refreshToken;
      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", nextRefreshToken);
      originalRequest._retry = true;

      return requestor(originalRequest);
    }
    return Promise.reject(error);
  },
);
