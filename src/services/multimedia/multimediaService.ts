
import { ImageForUpload, PhotoListPaginated } from "./multimediaType";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";


    async function getPhotos(cursor?: string): Promise<PhotoListPaginated>{
            const photoPage = await  CameraRoll.getPhotos({first: 10, after: cursor});
            
            const photoList = photoPage.edges.map(edge => edge.node.image.uri)
        
        return {
            photoList,
            cursor: photoPage.page_info.end_cursor,
            hasNextPage: photoPage.page_info.has_next_page
        };
    }

export function prepareForUpload(imgURI: string): ImageForUpload{
    return {
        uri: imgURI,
        name: 'name',
        type: 'image/png'
    }
}

export const multimediaService = {prepareForUpload, getPhotos}