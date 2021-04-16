import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main, {RouterMainStackProps} from './Main';

export type RouterRootStackProps = {
  Main: NavigatorScreenParams<RouterMainStackProps>;
};

const RouterRootStack = createStackNavigator<RouterRootStackProps>();

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <RouterRootStack.Navigator mode="modal" headerMode="none">
        <RouterRootStack.Screen name="Main" component={Main} />
      </RouterRootStack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
