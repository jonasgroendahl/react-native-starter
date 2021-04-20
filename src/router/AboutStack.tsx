import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import About from '../screens/About';
import AboutTheApp from '../screens/AboutTheApp';
import Privacy from '../screens/Privacy';
import Terms from '../screens/Terms';

export type RouterAboutStack = {
  About: undefined;
  Privacy: undefined;
  Terms: undefined;
  AboutTheApp: undefined;
};

const RouterAboutStack = createStackNavigator<RouterAboutStack>();

const AboutStack: React.FC = () => {
  return (
    <RouterAboutStack.Navigator
      screenOptions={{
        headerBackTitle: '',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <RouterAboutStack.Screen name="About" component={About} />
      <RouterAboutStack.Screen
        name="AboutTheApp"
        component={AboutTheApp}
        options={{headerTitle: ''}}
      />
      <RouterAboutStack.Screen name="Privacy" component={Privacy} />
      <RouterAboutStack.Screen name="Terms" component={Terms} />
    </RouterAboutStack.Navigator>
  );
};

export default AboutStack;
