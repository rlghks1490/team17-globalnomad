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
    mutationKey: ["usersEditMyInformation"],
    mutationFn: () => usersService.patchUsersEditMyInformation(),
  },
  usersProfileImageUrl: {
    mutationKey: ["usersProfileImageUrl"],
    mutationFn: () => usersService.postUsersProfileImageUrl(),
  },
};

export default queryOptions;
