import {useHeaderHeight} from '@react-navigation/stack';
import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Button, Div, Input} from 'react-native-magnus';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SignInNavigationProp} from '../router/routerTypes';

type Props = {
  navigation: SignInNavigationProp;
};

const SignIn: React.FC<Props> = ({navigation}) => {
  const headerHeight = useHeaderHeight();

  const handleLogin = () => {
    navigation.replace('Main', {
      screen: 'MainTabs',
      params: {
        screen: 'HomeStack',
        params: {
          screen: 'Home',
        },
      },
    });
  };

  return (
    <Div flex={1} bg="white">
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.select({
          ios: 'padding',
          android: undefined,
        })}
        keyboardVerticalOffset={headerHeight}>
        <Div my={'lg'} mx={'lg'}>
          <Input placeholder="Username or email" autoFocus={true} />
        </Div>
        <Div my={'md'} mx={'lg'}>
          <Input placeholder="Password" />
        </Div>
        <Div mt="auto" justifyContent="flex-end" row mb={'md'} mx={'xl'}>
          <SafeAreaView>
            <Button onPress={handleLogin}>Log in</Button>
          </SafeAreaView>
        </Div>
      </KeyboardAvoidingView>
    </Div>
  );
};

export default SignIn;
