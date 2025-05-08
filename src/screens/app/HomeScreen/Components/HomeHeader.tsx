import { SimpleLogo } from '@brand';
import { Box, BoxProps, Icon } from '@components';
import { useAppSafeArea } from '@hooks';
import { useNavigation } from '@react-navigation/native';

import React from 'react';

function HomeHeader() {
  const { top } = useAppSafeArea();
  

  const navigation = useNavigation();

  function navigateToSearchScreen(){
    navigation.navigate(`SearchScreen`);
  }

  return (
    <Box {...$wrapper} style={{ paddingTop: top }}>
      {/* <Box backgroundColor="carrotSecondary" height={16} width={70} /> */}
      <SimpleLogo width={70} />
      <Box flexDirection="row">
        <Box mr="s24">
          <Icon onPress={navigateToSearchScreen} name="search" />
        </Box>
        <Box mr="s24">
          <Icon name="bellIcon" />
        </Box>
        <Box mr="s24">
          <Icon name="comment" />
        </Box>
      </Box>
    </Box>
  );
}

export default HomeHeader;

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  marginBottom: 's24',
};
