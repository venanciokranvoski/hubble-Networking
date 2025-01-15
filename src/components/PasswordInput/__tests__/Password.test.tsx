import React from "react";

import { fireEvent, render, screen } from '@test-utils';
import { IconProps, PasswordInput } from '@components';

describe('<PasswordInput />', () => {
    test('should render component', () => {
        const mockedOnChange = jest.fn();

        render(
            <PasswordInput 
                label="password"
                placeholder="password"
                value="1234"
                onChangeText={mockedOnChange}
            />
        );
            const inputElement = screen.getByPlaceholderText(/password/); // verifica se a senha esta oculta 
            expect(inputElement.props.secureTextEntry).toBeTruthy(); 
        });

        test('when pressing the eye icon, it should show the password and change to eye off icon', () => {
            const mockedOnChange = jest.fn();
    
            render(
                <PasswordInput
                    label="Password"
                    placeholder="password"
                    value="1234"
                    onChangeText={mockedOnChange}
                />
            );


                // Verifica se o ícone "eyeON" está na tela
                const eyeOnIcon = screen.getByTestId('eyeON');
                expect(eyeOnIcon).toBeTruthy();
        
                // Simula o clique no ícone "eyeON"
                fireEvent.press(eyeOnIcon);
        
                // Verifica se o ícone mudou para "eyeOF"
                const eyeOffIcon = screen.getByTestId('eyeOF');
                expect(eyeOffIcon).toBeTruthy();
        
                // Verifica se a senha está visível
                const inputElement = screen.getByPlaceholderText(/password/);
                expect(inputElement.props.secureTextEntry).toBeFalsy();

        });
    });

