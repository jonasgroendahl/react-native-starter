import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Div} from 'react-native-magnus';

const {height} = Dimensions.get('screen');

const TopBounceBackground: React.FC = () => {
  return (
    <Div {...StyleSheet.absoluteFill} top={-(height / 2)}>
      <Div bg="white" flex={1} />
    </Div>
  );
};

export default TopBounceBackground;
