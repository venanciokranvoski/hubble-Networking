    import React, { useRef } from 'react';

    import { Box, BoxProps, Icon, PermissionsManager } from '@components';
    import { AppScreenProps } from '@routes';
    import { AppState, Dimensions, StyleSheet } from 'react-native';
    import { useAppSafeArea, useStateDevice } from '@hooks';
    import {
    Camera,
    Templates,
    useCameraDevice,
    useCameraFormat,
    } from 'react-native-vision-camera';
    import { useIsFocused } from '@react-navigation/native';
import { multimediaService } from '@services';

    const CAMERA_VIEW = Dimensions.get('screen').width;
    const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2;
    const CONTROL_DIFF = 30;

    export function CameraScreen({ navigation }: AppScreenProps<'CameraScreen'>) {
    const { top } = useAppSafeArea();
    const [isReady, setIsReady] = React.useState<boolean>(false);
    const [flash, setFlash] = React.useState(false);
    const device = useCameraDevice('back', {
        physicalDevices: [
        'ultra-wide-angle-camera',
        'wide-angle-camera',
        'telephoto-camera',
        ],
    });
    const isFocused = useIsFocused();
    const isActiveStateDevice = useStateDevice();
    const isActive = isFocused && isActiveStateDevice === 'active';
    const format = useCameraFormat(device, Templates.Instagram);
    const camera = useRef<Camera>(null);

    async function UserTakePhoto() {
        if (camera.current) {
        const photoFile = await camera.current?.takePhoto({
            flash: flash ? 'on' : 'off',
            qualityPrioritization: 'quality',
        });

        navigation.navigate('PublishedPostScreen', {
            imageURL: multimediaService.prepareImageURI(photoFile.path),
        });
        }
    }

    function toggleFlash() {
        setFlash((prev) => !prev);
    }
    return (
        <PermissionsManager
        permissionsName="camera"
        description="Permita o Nubble acessar a camera"
        >
        <Box flex={1} backgroundColor="primary">
            {device != null && (
            <Camera
                ref={camera}
                format={format}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={isActive}
                onInitialized={()=> setIsReady(true)}
                photo={true}
                enableHighQualityPhotos={true}  // necessario para tirar photo no IOS devido um bug! 
            />
            )}

            <Box flex={1} justifyContent="space-between">
            <Box {...$controlAreaTop} style={{ paddingTop: top }}>
                <Icon
                name="arrowLeftIcon"
                size={20}
                color="grayWhite"
                onPress={navigation.goBack}
                />

                <Icon
                name={flash ? 'flashON' : 'flashOF'}
                size={20}
                onPress={toggleFlash}
                />
                <Box width={20} />
            </Box>

            <Box {...$controlAreaBottom}>
                {isReady && <Icon
                size={80}
                name="CameraClick"
                color="grayWhite"
                onPress={UserTakePhoto}
                />}
            </Box>
            </Box>
        </Box>
        </PermissionsManager>
    );
    }

    const $controlAreaTop: BoxProps = {
    backgroundColor: 'grayblack70',
    height: CONTROL_HEIGHT - CONTROL_DIFF,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 's24',
    };

    const $controlAreaBottom: BoxProps = {
    backgroundColor: 'grayblack70',
    height: CONTROL_HEIGHT + CONTROL_DIFF,
    justifyContent: 'center',
    alignItems: 'center',
    };
