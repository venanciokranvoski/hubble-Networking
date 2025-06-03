import React from "react";


import {PermissionName, usePermission} from '@services';

import {Activityindicator, Box, Button, Screen, Text, TextProps} from '@components';
import { Linking, Platform } from "react-native";

interface PermissionsManagerProps  {
    permissionsName: PermissionName;
    description: string;
    children: React.ReactElement;
}


export function PermissionsManager({permissionsName, description, children}: PermissionsManagerProps){

    const {isLoading, status} = usePermission(permissionsName);

    if(status === 'granted'){
        return children;
    }
    return(
        <Screen flex={1} justifyContent="center" alignItems="center">
            <Box flex={1} justifyContent="center" alignItems="center">
                <Text  preset='headingSmall' textAlign="center">{description}</Text>
                    {isLoading && <Activityindicator color="primary"  />}
                    {status === 'unavailable' && (
                <Text {...$messageStyle}>
                    Esse recurso não está disponível para esse dispositivo
                </Text>
                )}
                    {status === 'never_ask_again' && (
                    <Box>
                        {Platform.OS === 'android' && (
                <Text {...$messageStyle}>
                    É necessário abrir e fechar o App novamente após alterar as
                    configurações
                </Text>
                        )}
                        <Button 
                            title="Abrir aConfigurações" 
                            onPress={Linking.openSettings} 
                            mt="s10" 
                        />
                    </Box>


            )}
            </Box>
        </Screen>
    )
}

const $messageStyle: TextProps = {
    preset: 'paragraphMedium',
    color: 'error',
    bold: true,
    marginVertical: 's16',
    textAlign: 'center',
};