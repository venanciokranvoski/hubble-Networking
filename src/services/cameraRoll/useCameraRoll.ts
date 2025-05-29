import React, { useState } from "react"
import { PermissionsAndroid, Platform } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import { QueryKeys } from "@infra";
import { cameraRollService } from "./cameraRollService/cameraRollService";



export function useCameraRoll(hasPermission: boolean, onInitialPhoto?: (imageUri: string) => void) {
    const [list, setList] = useState<string[]>([])


    // Use Tan Stack
    const query = useInfiniteQuery({
        queryKey: [QueryKeys.CameraRollList], 
        queryFn: ({pageParam}) => cameraRollService.getPhotos(pageParam),
        getNextPageParam: ({cursor}) => cursor,
        enabled: hasPermission,
    })



    React.useEffect(()=> {
        if(query.data){
            const newList = query.data.pages.reduce<string[]>((prev, curr) => {
                return [...prev, ...curr.photoList]
            }, [])
        setList(newList)

        if(query.data.pages.length === 1 && onInitialPhoto){
            onInitialPhoto(newList[0])
        }
        }
    },[onInitialPhoto, query.data])
    return {
        photoList: list,
        hasNextPage: query.hasNextPage,
        fetchNextPage: ()=> query.fetchNextPage
    }
}