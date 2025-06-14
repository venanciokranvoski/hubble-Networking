import { MutationOptions } from "@infra";
import { useMutation } from "@tanstack/react-query";
import {authService} from '../authService';
import { EditPasswordParams } from "../authTypes";
import {errorUtils} from '@utils';



export function useAuthUpdatePassword(Options?: MutationOptions<string>){
    const {mutate, isLoading} = useMutation<string, unknown, EditPasswordParams>({
        mutationFn: params => authService.updatePassword(params),
        retry: false,
        onError: error => {
            if(Options?.onError){
                Options.onError(errorUtils.getErrorMessage(error));
            }
        },
        onSuccess: message => {
            if(Options?.onSuccess){
                Options.onSuccess(message)
            }
        },
    });

    return {
        updatePassword: (params: EditPasswordParams) => mutate(params),
        isLoading
    }
}