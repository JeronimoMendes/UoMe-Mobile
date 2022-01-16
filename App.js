import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import {
  Provider as PaperProvider,
} from 'react-native-paper';
import HomeScreen from './app/screens/HomeScreen';
import SplashScreen from './app/screens/SplashScreen';

export default function App() {
  const [clicks, setClicks] = useState(0);

  const increment = () => {
    setClicks(clicks + 1);
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
