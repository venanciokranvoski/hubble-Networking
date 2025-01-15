export {}

jest.mock('@react-navigation/native', ()=> {
    const mainModule = jest.requireActual('@react-navigation/native')
    return {
        ...mainModule,
        useNavigation: () => ({
            navigate: jest.fn(),
        })
    }
})