export type UsersSignup = {
  email: "string";
  nickname: "string";
  password: "string";
};

export type UsersCheckMyInformation = {
  id: "number";
  email: "string";
  nickname: "string";
  profileImageUrl: "string";
  createdAt: "string";
  updatedAt: "string";
};

export type UsersEditMyInformation = {
  nickname: "string";
  profileImageUrl: "string";
  newPassword: "string";
};

export type UsersProfileImageUrl = {
  profileImageUrl: "string";
};
