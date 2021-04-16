import React from 'react';
import {Host} from 'react-native-magnus';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Root from './router/Root';

const App: React.FC = () => {
  return (
    <Host>
      <SafeAreaProvider>
        <Root />
      </SafeAreaProvider>
    </Host>
  );
};

export default App;
