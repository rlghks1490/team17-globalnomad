import MyNotificationsService from "./notifications.service";

const queryOptions = {
  myNotificationsCheck: {
    queryKey: ["myNotificationsCheck"],
    queryFn: () => MyNotificationsService.getMyNotificationsCheck(),
  },
  deleteMyNotifications: () => ({
    mutationKey: ["deleteMyNotifications", "notificationsId"],
    mutationFn: (notificationsId: number) =>
      MyNotificationsService.deleteMyNotifications(notificationsId),
  }),
};

export default queryOptions;
