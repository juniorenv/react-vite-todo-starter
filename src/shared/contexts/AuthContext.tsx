import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

interface IAuthContextProps {
  email: string | undefined;
  accessToken: string | undefined;

  login(email: string, password: string): void;
  logout(): void;
}

const AuthContext = createContext({} as IAuthContextProps);

export function AuthProvider({ children }: PropsWithChildren) {
  const [email, setEmail] = useState<string>();
  const [accessToken, setAccessToken] = useState<string>();

  const logout = () => {};

  const login = (email: string, password: string) => {
    setEmail(email);
    setAccessToken(crypto.randomUUID());
  };

  return (
    <AuthContext.Provider value={{ login, logout, email, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const useIsAuthenticated = () => {
  const { accessToken } = useAuthContext();

  console.log(accessToken);

  return accessToken !== undefined;
};
