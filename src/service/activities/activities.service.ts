import { requestor } from "@/service/requestor";
import {
  ActivitiesCheck,
  ActivitiesDetailCheck,
  ActivitiesImageUrl,
  ActivitiesRegistration,
  ActivitiesReservationCheck,
  ActivitiesReservationRequest,
  ActivitiesReviewCheck,
} from "./activities.type";

class ActivitiesService {
  getActivitiesCheck() {
    return requestor.get<ActivitiesCheck>(`/activities`);
  }

  postActivitiesRegistration() {
    return requestor.post<ActivitiesRegistration>(`/activities`);
  }

  getActivitiesDetailCheck(activityId: number) {
    return requestor.get<ActivitiesDetailCheck>(`/activities/${activityId}`);
  }

  getActivitiesReservationCheck(activityId: number) {
    return requestor.get<ActivitiesReservationCheck>(
      `/activities/${activityId}/available-schedule`,
    );
  }

  getActivitiesReviewCheck(activityId: number) {
    return requestor.get<ActivitiesReviewCheck>(
      `/activities/${activityId}/reviews`,
    );
  }

  postActivitiesReservationRequest(activityId: number) {
    return requestor.post<ActivitiesReservationRequest>(
      `/activities/${activityId}/reservations`,
    );
  }

  postActivitiesImageUrl() {
    return requestor.post<ActivitiesImageUrl>(`/activities/image`);
  }
}

export default new ActivitiesService();
