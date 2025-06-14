
import { ImageForUpload, PhotoListPaginated } from "./multimediaType";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

import {manipulateAsync, SaveFormat} from 'expo-image-manipulator';
import { Platform } from "react-native";


    async function getPhotos(cursor?: string): Promise<PhotoListPaginated>{
            const photoPage = await  CameraRoll.getPhotos({first: 12, after: cursor});
            
            const photoList = photoPage.edges.map(edge => edge.node.image.uri)
        
        return {
            photoList,
            cursor: photoPage?.page_info?.end_cursor,
            hasNextPage: photoPage?.page_info?.has_next_page
        };
    }

async function prepareForUpload(imgURI: string): Promise<ImageForUpload>{
    console.log(`imageUri`, imgURI)
    const img = await manipulateAsync(prepareImageURI(imgURI), [], {
        compress: 0.5,
        format: SaveFormat.JPEG,
    });
    return {
        uri: img.uri,
        name: Date.now().toString(),
        type: 'image/jpeg'
    }
}


function prepareImageURI(imageURI:string): string{
    
    if(Platform.OS !== 'android'){
        return imageURI;
    }

    if(imageURI.startsWith('file://')){
        return imageURI;
    }

    return `file://${imageURI}`;
}

export const multimediaService = {prepareForUpload, getPhotos, prepareImageURI}