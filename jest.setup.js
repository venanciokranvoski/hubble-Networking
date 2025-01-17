export {}


//@ts-ignore
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('@react-navigation/native', ()=> {
    const mainModule = jest.requireActual('@react-navigation/native')
    return {
        ...mainModule,
        useNavigation: () => ({
            navigate: jest.fn(),
        })
    }
})