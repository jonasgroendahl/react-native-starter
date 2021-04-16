import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Profile from '../screens/Profile';

export type RouterProfileStackProps = {
  Profile: undefined;
};

const RouterProfileStack = createStackNavigator();

const ProfileStack: React.FC = () => {
  return (
    <RouterProfileStack.Navigator>
      <RouterProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          headerStyle: {
            shadowColor: 'transparent',
          },
          header: () => null,
        }}
      />
    </RouterProfileStack.Navigator>
  );
};

export default ProfileStack;
