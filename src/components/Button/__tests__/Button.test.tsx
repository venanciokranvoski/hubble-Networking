import React from "react";
import { Button, ButtonProps } from "../Button";

import { render, fireEvent, screen  } from '@test-utils';
import { StyleSheet } from "react-native";
import { theme } from "@theme";


function renderComponent(props?: Partial<ButtonProps>){
    render(<Button title="Button"  {...props} />);

    const titleElement = screen.getByText(/button title/i); // faz uma chegagem no teste para ver se o texto está inserido. 

    return {
        titleElement,
    }
}



describe('<Button />', () => {
    it('calls the onpress function when it is pressed', ()=> {
        const mocked = jest.fn();  // mock uma chamada fake para testar se de faot foi executada;
        const { titleElement } = renderComponent({onPress: mocked});
        fireEvent.press(titleElement);

        expect(mocked).toHaveBeenCalled();
    });

    it('does not call onPress fuction when it is disabled and it pressed', ()=>{
        const mocked = jest.fn();
        const {titleElement} = renderComponent({
            onPress: mocked,
            disabled: true
        });
        fireEvent.press(titleElement);
    });

    it('the title should be gray if button is disabled', ()=> {
        const {titleElement} = renderComponent({disabled: true});

        const titleStyle = StyleSheet.flatten(titleElement.props.style); // con esta propriedade flatten ela reuni os array em um objeto só!

        expect(titleStyle.color).toEqual(theme.colors.gray2); // equipara para ver se segue o mesmo tipo sendo igual 
    })
  
})
