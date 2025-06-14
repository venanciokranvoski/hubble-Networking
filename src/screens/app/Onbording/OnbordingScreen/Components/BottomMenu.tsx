import React from "react";

import {Box, Icon, Text, PressableBox} from '@components';

import { OnbordingPageProps} from './OnbordingPage';


type BottomMenuProps = Pick<OnbordingPageProps, 'onPressNext' | 'onPressSkip'> & {
    isLast: boolean;
}

export function BottomMenu({onPressNext, onPressSkip, isLast}: BottomMenuProps){
    const nexText = isLast ? 'Começar' : 'Próximo';
    return(
        <Box flexDirection="row" justifyContent="space-between">
            <PressableBox hitSlop={10} onPress={onPressSkip}>
                <Text semiBold color="gray2">Pular</Text>
            </PressableBox>
            <PressableBox
                hitSlop={10}
                onPress={onPressNext}
                flexDirection="row"
                alignItems="center">
                    <Text mr="s4">{nexText}</Text>
                    <Icon name="arrowRightIcon" color="carrotSecondary" />
            </PressableBox>
        </Box>
    )
}