import usersService from "./users.service";
import { UsersEditMyInformation } from "./users.type";

const queryOptions = {
  usersSignup: {
    queryKey: ["usersSignup"],
    queryFn: () => usersService.postUsersSignup(),
  },
  usersCheckMyInformation: (profileImageUrl: string) => ({
    queryKey: ["usersCheckMyInformation", profileImageUrl],
    queryFn: () => usersService.getUsersCheckMyInformation(profileImageUrl),
  }),
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
