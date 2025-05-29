    import { Box, BoxProps, Button, Icon, Text } from '@components';
    import React from 'react';
    import { ImageBackground, StyleSheet } from 'react-native';

    interface Props {
    imageURL: string;
    imageWidth: number;
    }

    export function Header({ imageURL, imageWidth }: Props) {
    return (
        <Box>
        <ImageBackground
            source={{ uri: imageURL }}
            style={[
            {
            width: imageWidth,
            height: imageWidth,
            },styles.imgBack]}>
            <Button preset='ghost' title="Escolher essa " onPress={() => {}} marginBottom="s24" />
        </ImageBackground>
        <Box {...$optionStyle}>
            <Text preset="headingSmall">Sua Galeria</Text>
            <Icon name="camera" />
        </Box>
        </Box>
    );
    }

    const styles = StyleSheet.create({
        imgBack:{
            justifyContent: 'flex-end',
            alignItems: 'center'
        }
    })

    const $optionStyle: BoxProps = {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 's24',
        paddingVertical: 's16'
    }