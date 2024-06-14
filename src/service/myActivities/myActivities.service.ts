import { requestor } from "@/service/requestor";
import {
  MyActivitiesCheck,
  MyActivitiesRegistrationDashboard,
  MyActivitiesRegistrationSchedule,
  MyActivitiesReservationCheck,
  MyActivitiesUpdateReservationStatus,
  deleteMyActivities,
  patchMyActivities,
} from "./myActivities.type";

class MyActivitiesService {
  getMyActivitiesCheck() {
    return requestor.get<MyActivitiesCheck>(`/my-activities`);
  }

  getMyActivitiesRegistrationDashboard(activityId: number) {
    return requestor.get<MyActivitiesRegistrationDashboard>(
      `/my-activities/${activityId}/reservation-dashboard`,
    );
  }

  getMyActivitiesRegistrationSchedule(activityId: number) {
    return requestor.get<MyActivitiesRegistrationSchedule>(
      `/my-activities/${activityId}/reservation-schedule`,
    );
  }

  getMyActivitiesReservationCheck(activityId: number) {
    return requestor.get<MyActivitiesReservationCheck>(
      `/my-activities/${activityId}/reservations`,
    );
  }

  patchMyActivitiesUpdateReservationStatus(
    activityId: number,
    reservationId: number,
  ) {
    return requestor.patch<MyActivitiesUpdateReservationStatus>(
      `/my-activities/${activityId}/reservations/${reservationId}`,
    );
  }

  deleteMyActivities(activityId: number) {
    return requestor.delete<deleteMyActivities>(`/my-activities/${activityId}`);
  }

  patchMyActivities(activityId: number, formData: patchMyActivities) {
    return requestor.patch<patchMyActivities>(
      `/my-activities/${activityId}`,
      formData,
    );
  }
}

export default new MyActivitiesService();
