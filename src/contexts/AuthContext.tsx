import { createContext, ReactNode } from 'react';
import { useProvideAuth } from '~/hooks/useAuth';

type userType = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: userType | undefined;
  signInGoogle: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
