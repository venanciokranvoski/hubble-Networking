import React from "react";
import { Dimensions, Image } from 'react-native';


import { useAppColor} from '@services';

import {OnbordingPageItem} from '../onbordingData';

const Screen_Width = Dimensions.get('screen').width;

type ImageHeaderProps = {
    image: OnbordingPageItem['image'];
}

export function ImageHeader({image}: ImageHeaderProps){
    const appColor = useAppColor();

    const source = appColor === 'light' ? image?.light : image?.dark;
    return (
        <Image source={source} style={{width: Screen_Width, height: '90%'}} />
    )
}