import { requestor } from "@/service/requestor";
import {
  MyReservationReviewsReq,
  MyReservationsCheck,
  myReservationsCancel,
  myReservationsReviews,
} from "./reservations.type";

class MyReservationsService {
  getMyReservationsCheck() {
    return requestor.get<MyReservationsCheck>(`/my-reservations`);
  }

  patchMyReservationsCancel(reservationId: number) {
    return requestor.patch<myReservationsCancel>(
      `/my-reservations/${reservationId}`,
      { status: "canceled" },
    );
  }
  postMyReservationsReviews(
    reservationId: number,
    rating: number,
    content: string,
  ) {
    return requestor.post<MyReservationReviewsReq>(
      `/my-reservations/${reservationId}/reviews`,
      { rating, content },
    );
  }
}

export default new MyReservationsService();
