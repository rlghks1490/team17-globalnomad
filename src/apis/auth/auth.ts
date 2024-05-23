import axios from "axios";
import { FormValues } from "./auth.type";

export const instance = axios.create({
  baseURL: "https://sp-globalnomad-api.vercel.app/4-17",
});

export const auth = {
  signin: async (userData: FormValues) => {
    const response = await instance.post("/auth/login", userData);
    return response.data;
  },
};
