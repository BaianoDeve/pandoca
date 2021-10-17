import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';

export type User = {
  name: string;
  email: string;
};

type ContextData = {
  signed: boolean;
  user: User | null;
  loading: boolean;
  singIn: () => Promise<void>;
  singOut: () => Promise<void>;
};

type ProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<ContextData>({} as ContextData);

const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const [[, storagedUser], [, storagedToken]] = await AsyncStorage.multiGet(
        ['@PSAuth:user', '@PSAuth:token']
      );

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function singIn() {
    const { token, user } = await auth.singIn();

    setUser(user);

    await AsyncStorage.setItem('@PSAuth:user', JSON.stringify(user));
    await AsyncStorage.setItem('@PSAuth:token', token);
  }

  async function singOut() {
    await AsyncStorage.clear();

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, singIn, singOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
