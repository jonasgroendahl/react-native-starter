import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouterAboutStack} from './AboutStack';
import {RouterHomeStackProps} from './HomeStack';
import {RouterMainStackProps} from './Main';
import {RouterMainTabsProps} from './MainTabs';
import {RouterProfileStackProps} from './ProfileStack';
import {RouterRootStackProps} from './Root';

export type RootMainNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RouterMainStackProps, 'MainTabs'>,
  StackNavigationProp<RouterRootStackProps, 'Main'>
>;

export type HomeStackNavigationProp = CompositeNavigationProp<
  HomeNavigationProp,
  RootMainNavigationProp
>;

export type HomeNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RouterHomeStackProps, 'Home'>,
  BottomTabNavigationProp<RouterMainTabsProps, 'HomeStack'>
>;

export type ProfileStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RouterMainTabsProps, 'ProfileStack'>,
  RootMainNavigationProp
>;

export type ProfileNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RouterProfileStackProps, 'Profile'>,
  ProfileStackNavigationProp
>;

export type SignInNavigationProp = StackNavigationProp<
  RouterRootStackProps,
  'Main'
>;

export type AboutNavigatorProp = CompositeNavigationProp<
  StackNavigationProp<RouterAboutStack, 'About'>,
  RootMainNavigationProp
>;
