import React from 'react';
import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';
import { useCameraRoll } from '@services';
import { Dimensions, FlatList, Image, ListRenderItemInfo } from 'react-native';
import { Header } from './Components/Header';

export function NewPostScreen(props: AppTabScreenProps<'NewPostScreen'>) {
  const {list} = useCameraRoll();
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const NUMBER_COLUMNS =  4;
  const ITEM_WIDTH =  SCREEN_WIDTH / NUMBER_COLUMNS;

  function renderItem({item}: ListRenderItemInfo<string>){
    return(
        <Image 
          key={item}
          source={{uri: item}}
          style={{width:ITEM_WIDTH, height: ITEM_WIDTH}}
          />
    )
  }

  return (
    <Screen noPaddingHorizontal scrollable canGoBack title='Novo post'>
      <FlatList 
        data={list}
        renderItem={renderItem}
        numColumns={NUMBER_COLUMNS}
        ListHeaderComponent={<Header imageURL={list[0]} imageWidth={SCREEN_WIDTH} />}
      />
    </Screen>
  );
}
