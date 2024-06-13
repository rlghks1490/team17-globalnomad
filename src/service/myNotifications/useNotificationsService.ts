import { useMutation, useQuery } from "@tanstack/react-query";
import queryOptions from "./notifications.queryOption";

export const useMyNotificationsCheck = () => {
  return useQuery(queryOptions.myNotificationsCheck);
};

export const useDeleteMyNotifications = (notificationsId: number) => {
  return useMutation(queryOptions.deleteMyNotifications(notificationsId));
};
