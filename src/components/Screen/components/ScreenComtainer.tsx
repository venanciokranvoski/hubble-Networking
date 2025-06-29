import { Box, BoxProps, Icon, Text, TouchableOpacityVenon } from '@components';
import { useNavigation } from '@react-navigation/native';
import { ScreenProps } from '../Screen';



type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'HeaderComponent'> & BoxProps;

export function ScreenComponent({ title, canGoBack, HeaderComponent, ...BoxProps }: Props) {

  const navigation = useNavigation();
  const  showBackLabel = !title && !HeaderComponent;
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      marginBottom="s24"
      {...BoxProps}
    >
      {canGoBack && (
        <TouchableOpacityVenon
        testID='screen-back-button'
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          onPress={navigation.canGoBack}
          mr={showBackLabel ? 's10' : undefined}
        >
          <Icon
            name="arrowLeftIcon"
            color="primary"
            onPress={navigation.goBack}
          />
          {!showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              
            </Text>
          )}
        </TouchableOpacityVenon>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={20} />}
    </Box>
  );
}
