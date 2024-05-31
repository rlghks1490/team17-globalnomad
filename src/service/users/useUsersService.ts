import { useQuery } from "@tanstack/react-query";
import queryOptions from "./users.queryOption";

export const useUsersSignup = () => {
  return useQuery(queryOptions.usersSignup);
};

export const useUsersCheckMyInformation = () => {
  return useQuery(queryOptions.usersCheckMyInformation);
};

export const useUsersEditMyInformation = () => {
  return useQuery(queryOptions.usersEditMyInformation);
};

export const useUsersProfileImageUrl = () => {
  return useQuery(queryOptions.usersProfileImageUrl);
};
