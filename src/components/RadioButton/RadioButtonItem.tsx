import React from 'react'

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import { RadioButton, RadioButtonProps } from './RadioButton';

export type RadioButtonItemProps = RadioButtonProps & {
    label: string;
    description?: string;
}

export function RadioButtomItem({
    label,
    description,
    ...radioButtomItemProps
}: RadioButtonItemProps){
    return (
        <Box paddingVertical='s16'>
            <Box
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'>
                    <Text semiBold>{label}</Text>
                    <RadioButton {...radioButtomItemProps} />

            </Box>
            {
                description && (
                    <Text preset='paragraphSmall' style={{width: '80%'}} color='paragraphSecondary'>
                        {description}
                    </Text>
                )
            }
        </Box>
    )
}