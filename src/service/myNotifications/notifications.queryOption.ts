import MyNotificationsService from "./notifications.service";

const queryOptions = {
  myNotificationsCheck: {
    queryKey: ["myNotificationsCheck"],
    queryFn: () => MyNotificationsService.getMyNotificationsCheck(),
  },
  deleteMyNotifications: (notificationsId: number) => ({
    mutationKey: ["deleteMyNotifications", "notificationsId"],
    mutationFn: () =>
      MyNotificationsService.deleteMyNotifications(notificationsId),
  }),
};

export default queryOptions;
