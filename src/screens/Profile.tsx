import React from 'react';
import {Div, Icon} from 'react-native-magnus';
import {SafeAreaView} from 'react-native-safe-area-context';
import Container from '../components/Container';
import ListItem from '../components/ListItem';
import ProfileHeader from '../components/ProfileHeader';
import TopBounceBackground from '../components/TopBounceBackground';
import {ProfileNavigationProp} from '../router/routerTypes';

type ProfileProps = {
  navigation: ProfileNavigationProp;
};

const Profile: React.FC<ProfileProps> = ({navigation}) => {
  return (
    <Div flex={1}>
      <SafeAreaView style={{backgroundColor: 'white', flex: 0}} />
      <Container>
        <TopBounceBackground />
        <ProfileHeader />
        <Div pt={'lg'} bg="#eee">
          <ListItem
            label="Settings"
            left={
              <Icon
                fontSize="4xl"
                fontFamily="SimpleLineIcons"
                color="black"
                name="settings"
              />
            }
          />
          <ListItem
            label="About"
            left={
              <Icon
                fontSize="4xl"
                fontFamily="SimpleLineIcons"
                color="black"
                name="info"
              />
            }
            onPress={() =>
              navigation.navigate('Main', {
                screen: 'AboutStack',
              })
            }
          />
          <ListItem
            label="Onboarding"
            left={
              <Icon
                fontSize="4xl"
                fontFamily="SimpleLineIcons"
                color="black"
                name="graduation"
              />
            }
            onPress={() => navigation.navigate('OnBoarding')}
          />
          <ListItem
            label="Sign out"
            left={
              <Icon
                fontSize="4xl"
                fontFamily="SimpleLineIcons"
                color="black"
                name="logout"
              />
            }
            onPress={() =>
              navigation.replace('Main', {
                screen: 'SignIn',
              })
            }
          />
        </Div>
      </Container>
    </Div>
  );
};

export default Profile;
