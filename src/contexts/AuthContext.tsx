import { useState } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { createContext, useContext, ReactNode } from 'react';

type User = {
  name: string;
  email: string;
};

type ContextData = {
  isSingned: boolean;
  user: User;
  singIn: () => void;
  singOut: () => void;
};

type ProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<ContextData>({} as ContextData);

const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User>({} as User);

  async function singIn() {}

  async function singOut() {}

  return (
    <AuthContext.Provider value={{ isSingned: !!user, singIn, singOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
