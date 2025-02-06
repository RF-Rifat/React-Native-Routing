// CustomTabBar.tsx
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const CustomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: { key: string; name: string }, index: number) => {
        const {options} = descriptors[route.key];
        const label = options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}>
            <Text style={isFocused ? styles.tabLabelFocused : styles.tabLabel}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 14,
    color: '#000',
  },
  tabLabelFocused: {
    fontSize: 14,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default CustomTabBar;
