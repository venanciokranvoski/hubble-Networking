import React from 'react';
import { Svg, Circle } from 'react-native-svg';
import { iconBase } from '../components/Icon/Icon';

export function Camera_click({ size = 80, color = 'white' }: iconBase) {
    return (
        <Svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill={color}
        >
        <Circle cx="40" cy="40" r="34" fill="white" />
        <Circle cx="40" cy="40" r="39" stroke="white" stroke-width="2" />
        </Svg>
    );
}
