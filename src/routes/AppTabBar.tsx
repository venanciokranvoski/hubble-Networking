import { Box, Icon, Text, TouchableOpacityVenon } from '@components';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { mapScreenToProps } from './mapScreenToProps';
import { AppTabBottomTabParamList } from './AppTabNavigator';

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <Box flexDirection="row">
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
            activeOpacity={1}
            alignItems="center"
            accessibilityRole="button"
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
            <Text
              semiBold
              preset="paragraphCaption"
              style={{ color: isFocused ? '#673ab7' : '#222' }}
            >
              {item.label}
            </Text>
          </TouchableOpacityVenon>
        );
      })}
    </Box>
  );
}
