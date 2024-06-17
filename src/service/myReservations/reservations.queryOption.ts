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
  myReservationsReviews: (
    reservationId: number,
    rating: number,
    content: string,
  ) => ({
    mutationKey: ["myReservationsReviews", "reservationId"],
    mutationFn: () =>
      MyReservationsService.postMyReservationsReviews(
        reservationId,
        rating,
        content,
      ),
  }),
};

export default queryOptions;
