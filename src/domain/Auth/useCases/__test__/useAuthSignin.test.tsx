

import { useAuthSignIn } from "../useAuthSignIn";
import {  waitFor, renderHook } from "@test-utils";
import { authService } from "../../authService";
import { mockedAuthCredentials } from "./mockedData/mocks";


describe('useAuthSignIn', ()=> {

    const mockedSaveCredentials = jest.fn();
        
    it('saves credentials if the sign-in sucessfully', async()=> {
        jest.spyOn(authService, 'signIn').mockResolvedValueOnce(mockedAuthCredentials);

        const mockedONSucess = jest.fn();


        const {result} = renderHook(()=> useAuthSignIn({onSuccess: mockedONSucess}), {
          
        });

        result.current.signIn({email: 'lucas@coffstack.com', password: '123'});

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        expect(mockedSaveCredentials).toHaveBeenCalledWith(mockedAuthCredentials);
        expect(mockedONSucess).toHaveBeenCalledWith(mockedAuthCredentials);
    });

    it('calls the onError function with a message if sign-in fails', async ()=> {
        jest.spyOn(authService, 'signIn').mockRejectedValue(new Error('invalid user'));

        const mockedOnError = jest.fn();
        
        const {result} = renderHook(()=> useAuthSignIn({onError: mockedOnError}));

        result.current.signIn({email: 'lucas@coffstack.com', password: '123'});

        await waitFor(() => expect(result.current.isError).toBe(true));
    
        expect(mockedOnError).toHaveBeenCalledWith('invalid user');
    });

})