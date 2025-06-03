import React from 'react';
import { PermissionsManager, Screen } from '@components';
import { AppTabScreenProps } from '@routes';
import { useMultimediaGetPhotos, usePermission } from '@services';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';
import { Header } from './Components/Header';

export function NewPostScreen(props: AppTabScreenProps<'NewPostScreen'>) {
  const [selectPhoto, setSelectPhoto] = React.useState<string>(null);
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const NUMBER_COLUMNS = 4;
  const ITEM_WIDTH = SCREEN_WIDTH / NUMBER_COLUMNS;
  const permissionsUser = usePermission('photoLibrary');
  const { photoList, fetchNextPage } = useMultimediaGetPhotos(
    permissionsUser.status === 'granted',
    setSelectPhoto
  );
  const flatlistRef = React.useRef<FlatList>(null);

  React.useEffect(() => {
    if (photoList.length > 0 && !selectPhoto) {
      setSelectPhoto(photoList[0]);
    }
  }, [photoList, selectPhoto]);

  function onSelectPhoto(imageURI: string) {
    setSelectPhoto(imageURI);
    flatlistRef.current?.scrollToOffset({ offset: 0, animated: true });
  }

  function renderItem({ item }: ListRenderItemInfo<string>) {
    return (
      <Pressable onPress={() => onSelectPhoto(item)}>
        <Image
          key={item}
          source={{ uri: item }}
          style={{ width: ITEM_WIDTH, height: ITEM_WIDTH }}
        />
      </Pressable>
    );
  }

  return (
    <PermissionsManager permissionsName='photoLibrary' description='Permita o Nubble acessar a Galeria do seu Dispositivo'>
      <Screen noPaddingHorizontal canGoBack title="Novo post">
        <FlatList
          data={photoList}
          renderItem={renderItem}
          onEndReached={fetchNextPage}
          onEndReachedThreshold={0.1}
          numColumns={NUMBER_COLUMNS}
          ref={flatlistRef}
          ListHeaderComponent={
            <Header imageURL={selectPhoto}  imageWidth={SCREEN_WIDTH} />
          }
        />
      </Screen>
    </PermissionsManager>

  );
}
