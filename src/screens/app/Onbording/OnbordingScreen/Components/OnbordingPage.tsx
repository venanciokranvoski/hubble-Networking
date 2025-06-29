import React from "react";
import {Dimensions} from 'react-native';
import { Box } from "@components";


import {OnbordingPageItem} from '../onbordingData';

import {BottomMenu} from './BottomMenu';
import { Content } from './Content';
import { ImageHeader } from "./ImageHeader";


const SCREEN_WIDTH = Dimensions.get('screen').width;

export type OnbordingPageProps = {
    pageItem: OnbordingPageItem;
    onPressNext: () => void;
    onPressSkip: () => void;
}




export function OnbordingPage({pageItem, onPressNext, onPressSkip}: OnbordingPageProps){
    return (
        <Box flex={1} backgroundColor="background" width={SCREEN_WIDTH}>
            <Box flex={4} >
                <ImageHeader image={pageItem?.image}  />
            </Box>
            <Box flex={5} paddingHorizontal="s24">
                <Content {...pageItem} />
            </Box>
            <Box flex={1} paddingHorizontal="s24">
                <BottomMenu 
                    onPressNext={onPressNext}
                    onPressSkip={onPressSkip} 
                    isLast={pageItem.isLast}
                    />
            </Box>
        </Box>
    )
}

// import React from "react";

// import { Box } from "@components";

// export function OnbordingPage(){
//     return (
//         <Box flex={1} backgroundColor="background">
//             <Box flex={4} backgroundColor="error" />
//             <Box flex={5} backgroundColor="carrotSecondary" />
//             <Box flex={1} backgroundColor="success" />
//         </Box>
//     )
// }