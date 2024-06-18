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

  getMyActivitiesRegistrationDashboard(
    year: string,
    month: string,
    activityId: number,
  ) {
    return requestor.get<MyActivitiesRegistrationDashboard[]>(
      `/my-activities/${activityId}/reservation-dashboard`,
      {
        params: {
          year: year,
          month: month,
        },
      },
    );
  }

  getMyActivitiesRegistrationSchedule(date: string, activityId: number) {
    return requestor.get<MyActivitiesRegistrationSchedule[]>(
      `/my-activities/${activityId}/reserved-schedule`,
      { params: { date: date } },
    );
  }

  getMyActivitiesReservationCheck(
    scheduleId: number,
    status: string,
    activityId: number,
  ) {
    return requestor.get<MyActivitiesReservationCheck>(
      `/my-activities/${activityId}/reservations`,
      { params: { scheduleId: scheduleId, status: status } },
    );
  }

  patchMyActivitiesUpdateReservationStatus(
    activityId: number,
    reservationId: number,
    status: MyActivitiesUpdateReservationStatus,
  ) {
    return requestor.patch<MyActivitiesUpdateReservationStatus>(
      `/my-activities/${activityId}/reservations/${reservationId}`,
      status,
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
