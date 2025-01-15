import { Box, Icon, Text, TouchableOpacityVenon } from '@components';
import { useNavigation } from '@react-navigation/native';
import { ScreenProps } from '../Screen';



type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;

export function ScreenComponent({ title, canGoBack }: Props) {

  const navigation = useNavigation();
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      marginBottom="s24"
    >
      {canGoBack && (
        <TouchableOpacityVenon
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          onPress={navigation.canGoBack}
        >
          <Icon
            name="arrowLeftIcon"
            color="primary"
            onPress={navigation.goBack}
          />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s10">
              Voltar
            </Text>
          )}
        </TouchableOpacityVenon>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={20} />}
    </Box>
  );
}
