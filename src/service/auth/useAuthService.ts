import { useMutation } from "@tanstack/react-query";
import queryOptions from "./auth.queryOption";

export const useAuthLogin = () => {
  return useMutation(queryOptions.authLogin);
};

export const useAuthTokens = () => {
  return useMutation(queryOptions.authTokens);
};
