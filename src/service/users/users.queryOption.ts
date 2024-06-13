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
    mutationKey: ["usersEditMyInformation","data"],
    mutationFn: (data: UsersEditMyInformation) => usersService.patchUsersEditMyInformation(data),
  },
  usersProfileImageUrl: {
    mutationKey: ["usersProfileImageUrl","data"],
    mutationFn: (data: UsersProfileImageUrl ) => usersService.postUsersProfileImageUrl(data),
  },
};

export default queryOptions;
