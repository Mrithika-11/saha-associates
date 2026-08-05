import { createContext, useContext, useState, ReactNode } from "react";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "SUPER_ADMIN" | "ADMIN" | "EDITOR";
}

interface AuthContextValue {
  user: AdminUser | null;
  token: string | null;
  login: (token: string, user: AdminUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("saha_admin_token"));
  const [user, setUser] = useState<AdminUser | null>(() => {
    const raw = localStorage.getItem("saha_admin_user");
    return raw ? JSON.parse(raw) : null;
  });

  function login(newToken: string, newUser: AdminUser) {
    localStorage.setItem("saha_admin_token", newToken);
    localStorage.setItem("saha_admin_user", JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  }

  function logout() {
    localStorage.removeItem("saha_admin_token");
    localStorage.removeItem("saha_admin_user");
    setToken(null);
    setUser(null);
  }

  return <AuthContext.Provider value={{ user, token, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
