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

  patchUsersEditMyInformation() {
    return requestor.patch<UsersEditMyInformation>(`/users/me`);
  }

  postUsersProfileImageUrl() {
    return requestor.post<UsersProfileImageUrl>(`/users/me/image`);
  }
}

export default new UsersService();
