import React from "react";

import { fireEvent, renderScreen, screen } from "@test-utils";
import { AppStack } from "@routes";
import { authCredentialStorage } from "@services";
import { mockUtils, server, usermocked } from "@test";


beforeAll(()=> {
    // test integration with msw 
    server.listen();
    jest
    .spyOn(authCredentialStorage, 'get')
    .mockResolvedValue(mockUtils.veveAuthCredentials)
})

afterEach(() => {
    server.resetHandlers();
})

afterAll(()=> {
    server.close();
    jest.resetAllMocks();
})

describe('integration: SearchScreen ', ()=> {

    test('Search Flow ', async() => {
        renderScreen(<AppStack initialRouteName="SearchScreen" />);
        
        const inputtext = screen.getByPlaceholderText(/digite sua busca/i);
        fireEvent.changeText(inputtext, 'mar');

        const user1 = await screen.findByText(usermocked.user1.username)
        expect(user1).toBeTruthy();

        const user2 = await screen.findByText(usermocked.user2.username)
        expect(user2).toBeTruthy();
    })
})