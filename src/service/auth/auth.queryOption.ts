import AuthService from "./auth.service";

const queryOptions = {
  authLogin: {
    mutationKey: ["authLogin"],
    mutationFn: () => AuthService.postAuthLogin(),
    staleTime: 3 * 60 * 1000,
  },
  authTokens: {
    mutationKey: ["authTokens"],
    mutationFn: () => AuthService.postAuthTokens(),
    staleTime: 3 * 60 * 1000,
  },
};

export default queryOptions;
