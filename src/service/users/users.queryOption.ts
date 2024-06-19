import usersService from "./users.service";
import { UsersEditMyInformation, UsersProfileImageUrl } from "./users.type";

const queryOptions = {
  usersSignup: {
    queryKey: ["usersSignup"],
    queryFn: () => usersService.postUsersSignup(),
  },
  usersCheckMyInformation: {
    queryKey: ["usersCheckMyInformation"],
    queryFn: () => usersService.getUsersCheckMyInformation(),
  },
  usersEditMyInformation: {
    mutationKey: ["usersEditMyInformation", "data"],
    mutationFn: (data: UsersEditMyInformation) =>
      usersService.patchUsersEditMyInformation(data),
  },
  usersProfileImageUrl: {
    mutationKey: ["usersProfileImageUrl"],
    mutationFn: (formData: FormData) =>
      usersService.postUsersProfileImageUrl(formData),
  },
};

export default queryOptions;
