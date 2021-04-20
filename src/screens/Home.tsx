import React from 'react';
import {View} from 'react-native';
import {Button, Div} from 'react-native-magnus';
import {HomeStackNavigationProp} from '../router/routerTypes';

const Home: React.FC<{
  navigation: HomeStackNavigationProp;
}> = ({navigation}) => {
  return <Div flex={1}></Div>;
};

export default Home;
