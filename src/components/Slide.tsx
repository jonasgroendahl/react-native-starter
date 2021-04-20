import React from 'react';
import {Dimensions} from 'react-native';
import {Button, Div, Image, Text} from 'react-native-magnus';

const {width, height} = Dimensions.get('screen');

type Props = {
  image: string;
  title: string;
  onPress?: () => void;
};

const Slide: React.FC<Props> = ({image, title, onPress}) => {
  return (
    <Div w={width} flex={1}>
      <Div mt={height * 0.2} mx={20} rounded="lg">
        <Image
          source={{
            uri: image,
          }}
          h={300}
          w={'100%'}
          mb="2xl"
        />
      </Div>
      <Text fontSize="6xl" textAlign="center">
        {title}
      </Text>
      <Div my={'2xl'} row justifyContent="center">
        {onPress ? <Button onPress={onPress}>Understood</Button> : null}
      </Div>
    </Div>
  );
};

export default Slide;
