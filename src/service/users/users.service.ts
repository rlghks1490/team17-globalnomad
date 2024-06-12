import { requestor } from "@/service/requestor";
import {
  UsersSignup,
  UsersCheckMyInformation,
  UsersEditMyInformation,
  UsersProfileImageUrl,
} from "./users.type";

class UsersService {
  postUsersSignup() {
    return requestor.post<UsersSignup>(`/users`);
  }

  getUsersCheckMyInformation() {
    return requestor.get<UsersCheckMyInformation>(`/users/me`);
  }

  patchUsersEditMyInformation(data: UsersEditMyInformation) {
    return requestor.patch<UsersEditMyInformation>(`/users/me`, data);
  }

  postUsersProfileImageUrl(data: UsersProfileImageUrl) {
    return requestor.post<UsersProfileImageUrl>(`/users/me/image`, data);
  }
}

export default new UsersService();
