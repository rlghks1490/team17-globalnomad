// context/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/router";
import { auth } from "@/apis/auth/auth";
import { FormValues, PostAuthLoginRes } from "@/apis/auth/auth.type";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface ErrorMessage {
  message: string;
}

interface AuthContextProps {
  user: PostAuthLoginRes | null;
  signIn: (data: FormValues) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<PostAuthLoginRes | null>(null);
  const router = useRouter();

  useEffect(() => {
    // 여기에 새로고침 하면 로그아웃 안되도록 작성??
  }, []);

  const signInMutation = useMutation({
    mutationFn: (data: FormValues) => auth.signIn(data),
    mutationKey: ["signIn"],
    onSuccess: (data: PostAuthLoginRes) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setUser(data);
        router.push("/");
      }
    },
    onError: (error: AxiosError<ErrorMessage>) => {
      console.error(error);
    },
  });

  const signIn = async (data: FormValues) => {
    signInMutation.mutate(data);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error();
  }
  return context;
};
