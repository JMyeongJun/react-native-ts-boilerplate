import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';

import Navigation from './src/navigation';

function App(): JSX.Element {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(true);
    }
  }, []);

  return <Navigation />;
}

export default App;
