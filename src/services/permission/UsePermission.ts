
import React from "react";
import { PermissionName, PermissionsState } from "./permissionTypes";
import { permissionService } from "./PermissionService";


export function usePermission(permissionName: PermissionName){
    const [isLoading, setIsloading] = React.useState<boolean>(true);
    const [status, setStatus] = React.useState<PermissionsState>();

    async function checkPermission(){
        // 1) check se a permissão ja foi concedida 
        // 2) caso nao, request da permissão 
        // 3) lidar com unavailable
        try {
            setIsloading(true)
            const initialState = await permissionService.check(permissionName);
            if(initialState === 'denied'){
                const _status = await permissionService.request(permissionName);
                setStatus(_status);
            }else {
                setStatus(initialState);
            }
        } catch (error) {
            setStatus('unavailable');
        }finally{
            setIsloading(false)
        }
    }

    React.useEffect(()=> {
        checkPermission();
    },[])

    return {
        status,
        isLoading,
    }
}