import React, {useRef, useState} from 'react';
import {Dimensions, Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Div, Text} from 'react-native-magnus';
import {SafeAreaView} from 'react-native-safe-area-context';
import Dot from '../components/Dot';
import Slide from '../components/Slide';
import {RootMainNavigationProp} from '../router/routerTypes';

const {width} = Dimensions.get('window');

type Props = {
  navigation: RootMainNavigationProp;
};

// range added because of inconsistensies on Android
const RANGE = 5;

const OnBoarding: React.FC<Props> = ({navigation}) => {
  const [slideNo, setSlideNo] = useState(0);
  const ref = useRef();

  return (
    <Div flex={1} alignItems="center" justifyContent="center" bg="white">
      <ScrollView
        ref={ref}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          const offset = Math.round(e.nativeEvent.contentOffset.x);
          const roundedWidth = Math.round(width);
          const index = Math.round(offset / roundedWidth);
          const remainder = Math.round(offset % roundedWidth);

          if (
            remainder < roundedWidth * (index - 1) - RANGE &&
            remainder > roundedWidth * index + RANGE
          ) {
            return;
          }
          setSlideNo(offset < width ? 0 : index);
        }}
        scrollEventThrottle={0}
        onScrollAnimationEnd={() => setSlideNo(1)}>
        <Slide
          title="Welcome!"
          image="https://datanews.io/static/assets/img/illustrations/illustration-1.png"
        />
        <Slide
          title="Welcome 2"
          image="https://smashitbuck.com/wp-content/uploads/2020/10/illustration-1.png"
        />
        <Slide
          title="Welcome 3"
          image="https://smashitbuck.com/wp-content/uploads/2020/10/illustration-1.png"
          onPress={() =>
            navigation.navigate('MainTabs', {
              screen: 'HomeStack',
              params: {
                screen: 'Home',
              },
            })
          }
        />
      </ScrollView>
      <SafeAreaView>
        <Div
          row
          mb={Platform.select({
            ios: 'xs',
            android: 'lg',
          })}>
          {[...new Array(3)].map((_, index) => (
            <Dot key={`dot_${index}`} selected={index === slideNo} />
          ))}
        </Div>
      </SafeAreaView>
    </Div>
  );
};

export default OnBoarding;
