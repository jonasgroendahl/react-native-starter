import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main, {RouterMainStackProps} from './Main';
import OnBoarding from '../screens/OnBoarding';
import RNBootSplash from 'react-native-bootsplash';

export type RouterRootStackProps = {
  Main: NavigatorScreenParams<RouterMainStackProps>;
  OnBoarding: undefined;
};

const RouterRootStack = createStackNavigator<RouterRootStackProps>();

const Root: React.FC = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <RouterRootStack.Navigator mode="modal" headerMode="none">
        <RouterRootStack.Screen name="Main" component={Main} />
        <RouterRootStack.Screen name="OnBoarding" component={OnBoarding} />
      </RouterRootStack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
