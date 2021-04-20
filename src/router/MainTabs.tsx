import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack, {RouterHomeStackProps} from './HomeStack';
import {NavigatorScreenParams} from '@react-navigation/core';
import ProfileStack, {RouterProfileStackProps} from './ProfileStack';
import {Icon, Text} from 'react-native-magnus';

export type RouterMainTabsProps = {
  HomeStack: NavigatorScreenParams<RouterHomeStackProps>;
  ProfileStack: NavigatorScreenParams<RouterProfileStackProps>;
};

const RouterMainTabs = createBottomTabNavigator<RouterMainTabsProps>();

const MainTabs: React.FC = () => {
  return (
    <RouterMainTabs.Navigator initialRouteName="HomeStack">
      <RouterMainTabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: props => <Icon name="home" fontSize="xl" {...props} />,
          tabBarLabel: props => (
            <Text fontSize="sm" {...props} mb={5}>
              Home
            </Text>
          ),
        }}
      />
      <RouterMainTabs.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: props => <Icon name="user" fontSize="2xl" {...props} />,
          tabBarLabel: props => (
            <Text fontSize="sm" {...props} mb={5}>
              Profile
            </Text>
          ),
        }}
      />
    </RouterMainTabs.Navigator>
  );
};

export default MainTabs;
