import React from 'react';
import { useFonts } from 'expo-font';
import NavigationBar from './src/components/Navigation';
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  const [loaded] = useFonts({
    PermamentMarkerRegular: require('./assets/fonts/PermanentMarker-Regular.ttf'),
    IndieFlowerRegular: require('./assets/fonts/IndieFlower-Regular.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
  });

  if(!loaded) return null;

  return (
    <Provider store={store}>
      <NavigationBar />
    </Provider>
  );
}