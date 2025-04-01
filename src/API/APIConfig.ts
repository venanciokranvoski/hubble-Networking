import { AuthCredentials, authService } from '@domain';
import axios from 'axios';


export const  BASE_URL = 'http://10.0.2.2:3333/';

export const apiConfig = axios.create({
  baseURL: BASE_URL,
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => void;
}


export function registerInterceptor({authCredentials, removeCredentials, saveCredentials}: InterceptorProps){
  const intercerptor = apiConfig.interceptors.response.use(
    response => response, 
    async responseError => {
      const failedRequest = responseError.config;
      const hasNotRefreshToken = !authCredentials?.refleshToken;
      const isRefreshTokenRequest =  authService.isRefleshToken(failedRequest)

       if(responseError.response.status === 401) {
        if(hasNotRefreshToken || 
          isRefreshTokenRequest ||
          failedRequest.sent
        ) {
          removeCredentials();
          return Promise.reject(responseError);
        }

        failedRequest.sent = true;

        const newAuthCredentials = 
          await authService.authenticatedByRefleshToken(
            authCredentials.refleshToken,
          );
          saveCredentials(newAuthCredentials);

          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

          return apiConfig(failedRequest);
      }

      return Promise.reject(responseError);
    },
  );

  // remover listener when dismounted component
  return () => apiConfig.interceptors.response.eject(intercerptor)
}
