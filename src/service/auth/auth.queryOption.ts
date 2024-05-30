import AuthService from "./auth.service";

const queryOptions = {
  authLogin: {
    mutationKey: ["authLogin"],
    mutationFn: () => AuthService.postAuthLogin(),
  },
  authTokens: {
    mutationKey: ["authTokens"],
    mutationFn: () => AuthService.postAuthTokens(),
  },
};

export default queryOptions;
