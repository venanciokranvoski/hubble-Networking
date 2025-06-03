export type PermissionsState = 'granted' | 'denied' | 'never_ask_again' | 'unavailable';

export type PermissionName = 'photoLibrary' | 'camera';


export type PermissionService = {
    request: (name: PermissionName) => Promise<PermissionsState>
    check: (name: PermissionName) => Promise<PermissionsState>
}