import MyReservationsService from "./reservations.service";

const queryOptions = {
  myReservationsCheck: {
    queryKey: ["myReservationsCheck"],
    queryFn: () => MyReservationsService.getMyReservationsCheck(),
    staleTime: 3 * 60 * 1000,
  },
  myReservationsCancel: (reservationId: number) => ({
    mutationKey: ["myReservationsCancel", "reservationId"],
    mutationFn: () =>
      MyReservationsService.patchMyReservationsCancel(reservationId),
    staleTime: 3 * 60 * 1000,
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
    staleTime: 3 * 60 * 1000,
  }),
};

export default queryOptions;
