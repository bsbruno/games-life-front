import React, { createContext, useContext, useCallback, useState } from "react";
import api from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  token: string;
  user: User;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
};
const AppKeyToken = "@GameLife:token";
const AppKeyUser = "@GameLife:user";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(AppKeyToken);
    const user = localStorage.getItem(AppKeyUser);

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/sessions", { email, password });

    const { token, user } = response.data;

    localStorage.setItem(AppKeyToken, token);
    localStorage.setItem(AppKeyUser, JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(AppKeyToken);
    localStorage.removeItem(AppKeyUser);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("content User not found");
  }
  return context;
}
