import React from "react";

import { fireEvent, renderScreen, screen } from "@test-utils";
import { AppStack } from "@routes";
import { authCredentialStorage } from "@services";
import { mockUtils, server, usermocked } from "@test";
import { act } from "react-test-renderer";


jest.unmock(`@react-navigation/native`);

beforeAll(()=> {
    // test integration with msw 
    server.listen();
    jest.useFakeTimers();
    jest
    .spyOn(authCredentialStorage, 'get')
    .mockResolvedValue(mockUtils.veveAuthCredentials)
})

afterEach(() => {
    server.resetHandlers();
})

afterAll(()=> {
    server.close();
    jest.useRealTimers()
    jest.resetAllMocks();
})

describe('integration: SearchScreen ', ()=> {

    test('Search Flow ', async() => {
        // 1) Navigate to Search Screen 
        renderScreen(<AppStack initialRouteName="SearchScreen" />);
        
        // 2) Find the search input  and type user name
        const inputtext = screen.getByPlaceholderText(/Digite sua busca/i);
        fireEvent.changeText(inputtext, 'v');
        act(()=> jest.runAllTimers()) ;

        // 3) find two users as per MSW mock
        const user1 = await screen.findByText(usermocked.user1.username)
        screen.debug();
        expect(user1).toBeTruthy();

        const user2 = await screen.findByText(usermocked.user2.username)
        expect(user2).toBeTruthy();
        
        // 4) Select the user and navigate to profile screen 
        fireEvent.press(user1);  // user press button 

        // 5) Expect to be at the profile  Screen with the server loaded 
        const userFullName = await screen.findByText(usermocked.user1.full_name);
        expect(userFullName).toBeTruthy();

        // 6 Press the back button to navigate back to search Screen 
        const backBtn = await screen.findByText('screen-back-button');
        fireEvent.press(backBtn);

        // 7 Clean the search input 
        const inputTextAfterBack = screen.getByPlaceholderText(/digite sua busca/);
        fireEvent.changeText(inputTextAfterBack, '');
        act(()=> jest.runAllTimers());

        //8 Make sure the search history  (buscas recentes ) section appears
        const searchHistoryTitle = screen.getByText(/buscas recentes/i);
        expect(searchHistoryTitle).toBeTruthy();

         // 9 the user1 (pressed) was the saved in the search history 
        const user1AfterBack = screen.queryByText(usermocked.user1.username);
        expect(user1AfterBack).toBeTruthy();

        //10 the user2 (not pressed) must not appear in the search history 
        const user2AfterBack = screen.queryByText(usermocked.user2.username);
        expect(user2AfterBack).toBeFalsy();

        //11 Remove user1 from the search history  by pressing the trash icon 
        const trashicon = screen.getByTestId('trash')
        fireEvent.press(trashicon);

        //12 Make sure the user1 was removed from search history 
        const user1Removed = screen.queryByText(usermocked.user1.username);
        expect(user1Removed).toBeFalsy();
    })
})