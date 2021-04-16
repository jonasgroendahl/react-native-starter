import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';

export type RouterHomeStackProps = {
  Home: undefined;
};

const RouterHomeStack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <RouterHomeStack.Navigator>
      <RouterHomeStack.Screen name="Home" component={Home} />
    </RouterHomeStack.Navigator>
  );
};

export default HomeStack;
