import React from 'react';
import { useFonts } from 'expo-font';
import NavigationBar from './src/components/Navigation';

export default function App() {
  const [loaded] = useFonts({
    PermamentMarkerRegular: require('./assets/fonts/PermanentMarker-Regular.ttf'),
    IndieFlowerRegular: require('./assets/fonts/IndieFlower-Regular.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
  });

  if(!loaded) return null;

  return (
      <NavigationBar />
  );
}