import {useAuthCredentials, useShowOnbording} from '@services';


export type Stacks = 'loading' | 'Auth' | 'App' | 'Onbording';

export function useRouter(): Stacks {
    const showOnbording = useShowOnbording();
    const {authCredentials, isLoading} = useAuthCredentials();

    if(isLoading) {
        return 'loading'
    }

    if(showOnbording){
        return 'Onbording'
    }

    if(authCredentials){
        return 'App'
    }

    return 'Auth'
}