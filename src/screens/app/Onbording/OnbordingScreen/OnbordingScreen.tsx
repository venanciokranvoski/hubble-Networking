import React, { useRef } from "react";

import { Box } from "@components";

import {OnbordingScreenProps} from '@routes';
import { OnbordingPage } from "./Components/OnbordingPage";
import { FlatList, ListRenderItemInfo } from "react-native";
import { OnbordingPageItem, onbordingPages } from "./onbordingData";
import { useSettingService } from "@services";


export function OnbordingScreen({}: OnbordingScreenProps<'OnbordingScreen'>){

    const [pageIndex, setPageIndex] = React.useState<number>(0);

    const flatListRef = useRef<FlatList<OnbordingPageItem>>(null);

    const { finishOnbording } = useSettingService();

    function onPressNext(){
        const isLastPage = pageIndex === onbordingPages.length -1;
        if(isLastPage){
            finishOnbording();
        } else {
            const nextIndex = pageIndex + 1;
            flatListRef.current?.scrollToIndex({index: nextIndex, animated: true})
            setPageIndex(nextIndex);
        }
    }

    function renderItem({item}: ListRenderItemInfo<OnbordingPageItem>){
        return (
            <OnbordingPage 
                pageItem={item}
                onPressNext={onPressNext}
                onPressSkip={finishOnbording}
            />
        )
    }


    return (
        <Box flex={1} backgroundColor="background">
            <FlatList 
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={renderItem}
                data={onbordingPages}
            
            />
        </Box>
    )
}