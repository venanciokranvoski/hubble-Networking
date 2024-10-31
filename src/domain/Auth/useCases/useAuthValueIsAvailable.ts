

import { useQuery } from '@tanstack/react-query';
import { authService } from '../authService';
import { QueryKeys } from '@infra';
import { useDebounce } from '@hooks';

interface Param<T extends {length: number}>{
    value: T;
    enabled: boolean;
    queryKey: QueryKeys;
    isAvailableFunc: (value: T) => Promise<boolean>
}

/**
 * Function Generics
 * 
 */

 function useAuthIsValueAvailable<T extends {length: number}>({
    value, 
    enabled,
    isAvailableFunc,
    queryKey,
}: Param<T>){
    const debounceValue =  useDebounce(value, 1500);

    const { data, isFetching} = useQuery({
    queryKey: [queryKey, debounceValue],
    queryFn: () => isAvailableFunc(debounceValue),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debounceValue.length > 0,
});
    const isDebouncing = debounceValue !== value;

    return {
        isUnavailable: data === false,
        isFetching: isFetching || isDebouncing,  
    };
}

export function useAuthIsUsernameAvailable({
    username,
    enabled,
    }: {
        username: string;
        enabled: boolean;
    }) {
        return useAuthIsValueAvailable({
            value: username,
            enabled,
            isAvailableFunc: authService.isUserNameAvailable,
            queryKey: QueryKeys.isUserNameAvailable,
        });
    }
   
export function useAuthIsEmailAvailable({
    email,
    enabled
}: {
    email: string;
    enabled: boolean;
}) {
    return useAuthIsValueAvailable({
        value: email,
        enabled,
        isAvailableFunc: authService.isEmailAvailable,
        queryKey: QueryKeys.isUserNameAvailable
    })
}