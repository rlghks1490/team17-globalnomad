import { requestor } from "@/service/requestor";
import {
  MyReservationsCheck,
  myReservationsCancel,
  myReservationsReviews,
} from "./reservations.type";

class MyReservationsService {
  getMyReservationsCheck() {
    return requestor.get<MyReservationsCheck>(`/my-reservations`);
  }

  patchMyReservationsCancel(reservationId: number) {
    return requestor.delete<myReservationsCancel>(
      `/my-reservations/${reservationId}`,
    );
  }
  postMyReservationsReviews(reservationId: number) {
    return requestor.delete<myReservationsReviews>(
      `/my-reservations/${reservationId}/reviews`,
    );
  }
}

export default new MyReservationsService();
