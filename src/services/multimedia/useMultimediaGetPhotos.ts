import React, { useState } from "react"
import { useInfiniteQuery } from "@tanstack/react-query";
import { QueryKeys } from "@infra";
import { multimediaService } from "./multimediaService";




export function useMultimediaGetPhotos(hasPermission: boolean, onInitialPhoto?: (imageUri: string) => void) {
    const [list, setList] = useState<string[]>([])


    // Use Tan Stack
    const query = useInfiniteQuery({
        queryKey: [QueryKeys.CameraRollList], 
        queryFn: ({pageParam}) => multimediaService.getPhotos(pageParam),
        getNextPageParam: ({cursor}) => cursor,
        enabled: hasPermission,
    })

    function fetchNextPage(){
        if(hasPermission){
            query.fetchNextPage();
        }
    }



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
        fetchNextPage
    }
}