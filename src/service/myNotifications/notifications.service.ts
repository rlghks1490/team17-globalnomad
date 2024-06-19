import { requestor } from "@/service/requestor";
import {
  MyNotificationsCheck,
  deleteMyNotifications,
} from "./notifications.type";

class MyNotificationsService {
  getMyNotificationsCheck() {
    return requestor.get<MyNotificationsCheck>(`/my-notifications`);
  }

  deleteMyNotifications(notificationsId: number) {
    return requestor.delete(`/my-notifications/${notificationsId}`);
  }
}

export default new MyNotificationsService();
