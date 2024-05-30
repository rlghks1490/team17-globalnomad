import axios, { AxiosInstance, type AxiosRequestConfig } from "axios";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

const requestor: AxiosInstance = axios.create(axiosRequestConfig);

export { requestor };
