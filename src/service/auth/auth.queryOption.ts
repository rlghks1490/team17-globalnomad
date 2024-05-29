import AuthService from "./auth.service";

const queryOptions = {
  authLogin: {
    queryKey: ["authLogin"],
    queryFn: () => AuthService.postAuthLogin(),
  },
  authTokens: {
    queryKey: ["authTokens"],
    queryFn: () => AuthService.postAuthTokens(),
  },
};

export default queryOptions;
