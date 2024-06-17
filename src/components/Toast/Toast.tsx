import React from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { Icon } from '@components';
import { $shadowProps } from '@theme';
import { Dimensions } from 'react-native';

export function Toast() {
  return (
    <Box top={100} {...$BoxStyle}>
      <Icon name="CheckRoundIcon" size={20} color="sucess" />
      <Text style={{ flexShrink: 1 }} ml="s16" preset="paragraphMedium" bold>
        dsdsdssdsdsdsdsdsdsd
      </Text>
    </Box>
  );
}

const $BoxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'grayWhite',
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  opacity: 0.95,
  maxWidth: Dimensions.get('screen').width * 0.9,
  style: { ...$shadowProps },
};
