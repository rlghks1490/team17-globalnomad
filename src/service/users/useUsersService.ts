import { useMutation, useQuery } from "@tanstack/react-query";
import queryOptions from "./users.queryOption";

export const useUsersSignup = () => {
  return useQuery(queryOptions.usersSignup);
};

export const useUsersCheckMyInformation = (profileImageUrl: string = "") => {
  return useQuery(queryOptions.usersCheckMyInformation(profileImageUrl));
};

export const useUsersEditMyInformation = () => {
  return useMutation(queryOptions.usersEditMyInformation);
};

export const useUsersProfileImageUrl = () => {
  return useMutation(queryOptions.usersProfileImageUrl);
};
