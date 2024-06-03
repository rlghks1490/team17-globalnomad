import { requestor } from "@/service/requestor";
import { AuthLogin, AuthTokens } from "./auth.type";

class AuthService {
  postAuthLogin() {
    return requestor.post<AuthLogin>(`/auth/login`);
  }

  postAuthTokens() {
    return requestor.post<AuthTokens>(`/auth/tokens`);
  }
}

export default new AuthService();
