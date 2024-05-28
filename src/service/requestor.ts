import axios, { AxiosInstance, type AxiosRequestConfig } from "axios";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzA3LCJ0ZWFtSWQiOiI0LTE3IiwiaWF0IjoxNzE2OTEyNjA5LCJleHAiOjE3MTY5MTQ0MDksImlzcyI6InNwLWdsb2JhbG5vbWFkIn0.cW5Mlp9fheNtMmQry0aVCzrTbkQMxbv-R2WICmPq2ZU`,
  },
};

const requestor: AxiosInstance = axios.create(axiosRequestConfig);

export { requestor };
