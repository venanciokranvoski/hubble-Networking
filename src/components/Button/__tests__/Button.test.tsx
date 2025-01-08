import React from "react";
import { render } from '@testing-library/react-native'
import { Button } from "../Button";

import { ThemeProvider } from "@shopify/restyle";
import { theme } from "@theme";
import { useNavigation } from "@react-navigation/native";


jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(()=> ({
        navigate: jest.fn(),
        goBack: jest.fn(),
    })),
}))


describe('<Button />', () => {

    test('the component rendered', () => {
       const {debug} = render(
            <ThemeProvider theme={theme}>
                    <Button title="button title" />
            </ThemeProvider>
        )
        debug();
    })
})