    import React from 'react';
    import { Dimensions, Image } from 'react-native';

    import { Button, Screen, Text, TextInput } from '@components';
    import { AppScreenProps } from '@routes';
import { useToastService } from '@services';
import { usePostCreate } from '@domain';


    const IMAGE_WIDTH = Dimensions.get('screen').width / 2;

    export function PublishedPostScreen({
    route,
    navigation
    }: AppScreenProps<'PublishedPostScreen'>) {
    const [description, setDescription] = React.useState<string>('');
    const {showToast} = useToastService();
    const imageUri = route.params.imageURL;

    const {createPost, isLoading} = usePostCreate({
        onSuccess:() => {
            navigation.navigate('AppTabNavigator', {screen: 'HomeScreen'});
            showToast({message: 'Foto publicada!', type: 'sucess'})
        }
    })

    function publishPost(){
        createPost({description, imageUri})
    }


    return (
        <Screen scrollable canGoBack title="Nove Post">
        <Image
            source={{
            uri: route.params.imageURL,
            width: IMAGE_WIDTH,
            height: IMAGE_WIDTH,
            }}
            style={{ alignSelf: 'center' }}
        />

        <Text preset="headingSmall" mt="s32" mb="s10">
            Escreva uma legenda
        </Text>
        <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Digite aqui..."
            containerProps={{borderWidth:0}}
        />
        <Button mt='s56' title='Publicar post' onPress={publishPost}  loading={isLoading} />
        </Screen>
    );
    }
