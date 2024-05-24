import { FormValues } from "./auth.type";
import { instance } from "../apis";

export const auth = {
  signIn: async (userData: FormValues) => {
    const response = await instance.post("/auth/login", userData);
    return response.data;
  },
  signUp: async (userData: FormValues) => {
    const response = await instance.post("/users", userData);
    return response.data;
  },
};
