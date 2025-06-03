    import {
    request as RnRequestIOS,
    check as rnCheckIOS,
    PermissionStatus as RnPermissionsStatusIOS,
    PERMISSIONS as Rn_PermissionsIOS,
    Permission as RnPermissionIOS,
    } from 'react-native-permissions';
    import {
    PermissionName,
    PermissionService,
    PermissionsState,
    } from './permissionTypes';


    const mapName: Record<PermissionName, RnPermissionIOS> = {
        photoLibrary: Rn_PermissionsIOS.IOS.PHOTO_LIBRARY,
        camera: Rn_PermissionsIOS.IOS.CAMERA,
    }

    const mapStatus: Record<RnPermissionsStatusIOS, PermissionsState> = {
        blocked: 'never_ask_again',
        denied: 'denied',
        granted: 'granted',
        limited: 'granted',
        unavailable: 'unavailable'
    }

    async function check(name: PermissionName): Promise<PermissionsState> {
    return 'unavailable';
    }

    async function request(name: PermissionName): Promise<PermissionsState> {
    return 'unavailable';
    }

    export const permissionService: PermissionService = { check, request };
