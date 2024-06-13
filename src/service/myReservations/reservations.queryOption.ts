import MyReservationsService from "./reservations.service";

const queryOptions = {
  myReservationsCheck: {
    queryKey: ["myReservationsCheck"],
    queryFn: () => MyReservationsService.getMyReservationsCheck(),
  },
  myReservationsCancel: (reservationId: number) => ({
    mutationKey: ["myReservationsCancel", "reservationId"],
    mutationFn: () =>
      MyReservationsService.patchMyReservationsCancel(reservationId),
  }),
  myReservationsReviews: (reservationId: number) => ({
    mutationKey: ["myReservationsReviews", "reservationId"],
    mutationFn: () =>
      MyReservationsService.postMyReservationsReviews(reservationId),
  }),
};

export default queryOptions;
