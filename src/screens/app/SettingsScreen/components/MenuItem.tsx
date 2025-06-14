import React from 'react'

import {Icon, PressableBox, Text} from '@components';


export type MenuItensProps = {
    label: string;
    onPress: () => void;
}



export function MenuItem({label, onPress}:MenuItensProps ){
    return (
        <PressableBox
            onPress={onPress}
            flexDirection='row'
            alignItems='center'
            paddingVertical='s16'
            justifyContent='space-between'>
                <Text semiBold>{label}</Text>
                <Icon name='chevronR' />
        </PressableBox>
    )

}