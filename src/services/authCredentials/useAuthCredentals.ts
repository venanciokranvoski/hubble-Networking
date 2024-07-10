// import { persist } from 'zustand/middleware';
import { AuthCredentalsServices } from './authCredentialsType';
// import { create } from 'zustand';
// import { storage } from '../Storage';
import { useContext } from 'react';
import { AuthCredentialsContext } from './Providers/AuthCredentialsProviders';

export function useAuthCredentials(): AuthCredentalsServices {
  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error(
      'AuthCredentials should be used within a AuthCredentialsProvider'
    );
  }

  return context;
}

// Zustand
// const useAuthCredentialsZustand = create<AuthCredentalsServices>()(
//   persist(
//     (set) => ({
//       authCredentials: null,
//       isLoading: false,
//       saveCredentials: async (ac) => set({ authCredentials: ac }),
//       removeCredentials: async () => set({ authCredentials: null }),
//     }),
//     {
//       name: '@Auth',
//       storage: storage,
//     }
//   )
// );
