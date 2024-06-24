import { Dimensions } from 'react-native';
import { Toast, ToastPosition, ToastType } from '@services';
import { Box, BoxProps, Icon, IconProps, Text } from '@components';
import { $shadowProps } from '@theme';

const MAX_W = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({ toast }: Props) {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast?.type || 'sucess';
  return (
    <Box {...$BoxStyle} style={[{ [position]: 100, ...$shadowProps }]}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{ flexShrink: 1 }} ml="s16" preset="paragraphMedium" bold>
        {toast?.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  sucess: {
    color: 'sucess',
    name: 'CheckRoundIcon',
  },
  error: {
    color: 'error',
    name: 'ErrorIcon',
  },
};

const $BoxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'grayWhite',
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  opacity: 0.95,
  maxWidth: MAX_W,
};
