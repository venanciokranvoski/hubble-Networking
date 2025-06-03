export {}


import { initializeStorage, permissionService } from '@services';
import { check, request } from 'react-native-permissions';
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

jest.mock('./src/services/permission/PermissionService.ios.ts', () => ({
    permissionService: {
    request:jest.fn(),
    check: jest.fn(),
},
}));