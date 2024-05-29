import usersService from "./users.service";

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
    queryKey: ["usersEditMyInformation"],
    queryFn: () => usersService.patchUsersEditMyInformation(),
  },
  usersProfileImageUrl: {
    queryKey: ["usersProfileImageUrl"],
    queryFn: () => usersService.postUsersProfileImageUrl(),
  },
};

export default queryOptions;
