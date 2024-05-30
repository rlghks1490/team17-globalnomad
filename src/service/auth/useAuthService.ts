import { useQuery } from "@tanstack/react-query";
import queryOptions from "./auth.queryOption";

export const useAuthLogin = () => {
  return useQuery(queryOptions.authLogin);
};

export const useAuthTokens = () => {
  return useQuery(queryOptions.authTokens);
};
