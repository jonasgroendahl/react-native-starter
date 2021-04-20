import React from 'react';
import {Div} from 'react-native-magnus';
import ListItem from '../components/ListItem';
import {AboutNavigatorProp} from '../router/routerTypes';

type Props = {
  navigation: AboutNavigatorProp;
};

const About: React.FC<Props> = ({navigation}) => {
  return (
    <Div flex={1}>
      <ListItem
        label="About the app"
        onPress={() => navigation.navigate('AboutTheApp')}
      />
      <ListItem
        label="Privacy policy"
        onPress={() => navigation.navigate('Privacy')}
      />
      <ListItem
        label="Terms of use"
        onPress={() => navigation.navigate('Terms')}
      />
    </Div>
  );
};

export default About;
