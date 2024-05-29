import MyNotificationsService from "./notifications.service";

const queryOptions = {
  myNotificationsCheck: {
    queryKey: ["myNotificationsCheck"],
    queryFn: () => MyNotificationsService.getMyNotificationsCheck(),
  },
  deleteMyNotifications: (notificationsId: number) => ({
    queryKey: ["deleteMyNotifications,notificationsId"],
    queryFn: () =>
      MyNotificationsService.deleteMyNotifications(notificationsId),
  }),
};

export default queryOptions;
