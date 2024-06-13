import {
  Box,
  BoxProps,
  Icon,
  Text,
  TextProps,
  TouchableOpacityVenon,
  TouchableOpacityVenonProps,
} from '@components';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { mapScreenToProps } from './mapScreenToProps';
import { AppTabBottomTabParamList } from './AppTabNavigator';
import { $shadowProps } from '@theme';
import { useAppSafeArea } from '@hooks';

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea();

  return (
    <Box {...$BoxStyles} style={[{ paddingBottom: bottom }, $shadowProps]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const item =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityVenon
            key={item.id}
            {...$itemTouchable}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Icon
              name={isFocused ? item.icon.focused : item.icon.unfocused}
              color={isFocused ? 'primary' : 'gray1'}
            />
            <Text {...$label} color={isFocused ? 'primary' : 'gray1'}>
              {item.label}
            </Text>
          </TouchableOpacityVenon>
        );
      })}
    </Box>
  );
}

const $label: TextProps = {
  semiBold: true,
  marginTop: 's4',
  preset: 'paragraphCaption',
};

const $itemTouchable: TouchableOpacityVenonProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
};

const $BoxStyles: BoxProps = {
  padding: 's12',
  backgroundColor: 'grayWhite',
  flexDirection: 'row',
};
