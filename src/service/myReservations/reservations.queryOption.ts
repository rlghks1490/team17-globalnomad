import MyReservationsService from "./reservations.service";

const queryOptions = {
  myReservationsCheck: {
    queryKey: ["myReservationsCheck"],
    queryFn: () => MyReservationsService.getMyReservationsCheck(),
  },
  myReservationsCancel: (reservationId: number) => ({
    queryKey: ["myReservationsCancel,reservationId"],
    queryFn: () =>
      MyReservationsService.patchMyReservationsCancel(reservationId),
  }),
  myReservationsReviews: (reservationId: number) => ({
    queryKey: ["myReservationsReviews,reservationId"],
    queryFn: () =>
      MyReservationsService.postMyReservationsReviews(reservationId),
  }),
};

export default queryOptions;
