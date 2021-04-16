import React from 'react';
import {ScrollView} from 'react-native';
import {GeneralStyles} from '../styles';

const Container: React.FC = ({children}) => {
  return <ScrollView style={GeneralStyles.container}>{children}</ScrollView>;
};

export default Container;
