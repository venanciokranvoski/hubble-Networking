import { PermissionName, PermissionsState } from "@types";
import { Permission, PermissionsAndroid, Platform } from "react-native";



async function check(name: PermissionName): Promise<PermissionsState>{
    const permission = mapNameToPermission(name);
    if(permission) {
        const result = await PermissionsAndroid.check(permission);
        if(result){
            return 'granted'
        }
        return 'denied'
    }
    return 'unavailable'
}


async function request(name: PermissionName): Promise<PermissionsState>{
    const permission = mapNameToPermission(name);
    if(permission){
        const result = await PermissionsAndroid.request(permission);
        return result;
    }
    return 'unavailable'
}

function mapNameToPermission(name: PermissionName): Permission | null {
    switch(name){
        case 'photoLibrary':
        if(Platform.Version >= '33'){
            return 'android.permission.READ_MEDIA_IMAGES'
        }else {
            return 'android.permission.READ_EXTERNAL_STORAGE'
        }
        case 'camera':
            return 'android.permission.CAMERA'
        default:
            return null
    }
}

export const permissionService : permissionService =  {request, check }