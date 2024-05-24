import axios from "axios";

export const instance = axios.create({
  baseURL: "https://sp-globalnomad-api.vercel.app/4-17",
});
