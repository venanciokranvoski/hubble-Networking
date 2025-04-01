import React from "react";

import { mockedPostComment, server } from '@test';
import { fireEvent, render, renderScreen, screen, waitFor, waitForElementToBeRemoved } from "@test-utils";
import { PostCommentScreen } from "../../PostComponentScreen";
import { authCredentialStorage } from "@services";
import { Alert, AlertButton } from "react-native";
import { act } from "react-test-renderer";


beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() =>{ 
    server.close();
    jest.resetAllMocks();
    jest.useFakeTimers();
});


describe('integration PostCommentedScreen', () => {

    test('when Adding the list is automatically updated', async () => {
        render(<PostCommentScreen navigation={{} as any} route={{
            name: 'PostCommentedScreen',
            key: 'PostCommentedScreen',
            params: {
                postID: 1,
                postAuthorId: 1
            }
        }}

        />
        );

        const comment = await screen.findByText(
            /comentário aleatório dd3dd3d3d3d3d3d3d33d3d./i,
        );

        expect(comment).toBeTruthy();


        // achar o campo de input 
        const inputText = screen.getByPlaceholderText(/Adicione um comentario/i);

        // digitar a nossa mensagem 
        fireEvent.changeText(inputText, 'novo comentario');

        // clicar em enviar 
        fireEvent.press(screen.getByText(/enviar/i));


        // espera: a lista atualizada com um novo comentario.
        const newComent = await screen.findByText(/novo comentario/i);
        expect(newComent).toBeTruthy();

        const comments = await screen.findAllByTestId('post-comment-id');

        expect(comments.length).toBe(3);
    });

    // deletando um comentario. 

    test('Whem Deleting a comment, the list is automatically updated and a toast message is displayed ', async () => {

        jest
            .spyOn(authCredentialStorage, 'get')
            .mockRejectedValue(mockedPostComment.veveAuthCredentials)

            let mockedConfirm: AlertButton['onPress'];
            // mock alert
            const mockAlert = jest.spyOn(Alert, 'alert')
            .mockImplementation((title, message, buttons)=> {
                if(buttons && buttons[0]){
                    mockedConfirm = buttons[0].onPress;
                }
            })

        renderScreen(
            <PostCommentScreen
                navigation={{} as any}
                route={{
                    name: 'PostCommentedScreen',
                    key: 'PostCommentedScreen',
                    params: {
                        postID: 1,
                        postAuthorId: 1
                    }
                }}
            />,
        );

        // esperar a lista carregar
               // identificar o comentario que será deletedo
        const comment = await screen.findByText(
            mockedPostComment.postCommentAPI.message, { exact: false },
        );

        expect(comment).toBeTruthy();


        // long press no comentário
        // chamando o modal  chamado alert nativo do react native 
        fireEvent(comment, 'longPress'); // comportamento nativo 

       //pressionar em congirmar no alert
        expect(mockAlert).toHaveBeenCalled();

        //precionar confirmar
        mockedConfirm && mockedConfirm();

        // verificar se alist fori atualizada (meu comentario sumiu)
        await waitForElementToBeRemoved(()=> {
            screen.getByText(mockedPostComment.postCommentAPI.message, {
                exact: false,
            });
        });

        const comments = await screen.findAllByTestId('post-comment-id');

        expect(comments.length).toBe(1)



        await waitFor(() => 
            expect(screen.getByTestId('toast-message')).toBeTruthy(),
        );

        act(() => jest.runAllTimers());

        expect(screen.queryAllByTestId('toast-message')).toBeNull();



    })

})