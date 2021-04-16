import {NavigatorScreenParams} from '@react-navigation/core';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import SignIn from '../screens/SignIn';
import AboutStack from './AboutStack';
import MainTabs, {RouterMainTabsProps} from './MainTabs';

export type RouterMainStackProps = {
  SignIn: undefined;
  MainTabs: NavigatorScreenParams<RouterMainTabsProps>;
  AboutStack: undefined;
};

const RouterMainStack = createStackNavigator<RouterMainStackProps>();

const Main: React.FC = () => {
  return (
    <RouterMainStack.Navigator initialRouteName="MainTabs">
      <RouterMainStack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{
          headerShown: false,
        }}
      />
      <RouterMainStack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: 'Sign in'}}
      />
      <RouterMainStack.Screen
        name="AboutStack"
        component={AboutStack}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </RouterMainStack.Navigator>
  );
};

export default Main;
