import usersService from "./users.service";
import { UsersEditMyInformation } from "./users.type";

const queryOptions = {
  usersSignup: {
    queryKey: ["usersSignup"],
    queryFn: () => usersService.postUsersSignup(),
    staleTime: 3 * 60 * 1000,
  },
  usersCheckMyInformation: (profileImageUrl: string = "") => ({
    queryKey: ["usersCheckMyInformation", profileImageUrl],
    queryFn: () => usersService.getUsersCheckMyInformation(profileImageUrl),
    staleTime: 3 * 60 * 1000,
  }),
  usersEditMyInformation: {
    mutationKey: ["usersEditMyInformation", "data"],
    mutationFn: (data: UsersEditMyInformation) =>
      usersService.patchUsersEditMyInformation(data),
    staleTime: 3 * 60 * 1000,
  },
  usersProfileImageUrl: {
    mutationKey: ["usersProfileImageUrl"],
    mutationFn: (formData: FormData) =>
      usersService.postUsersProfileImageUrl(formData),
    staleTime: 3 * 60 * 1000,
  },
};

export default queryOptions;
