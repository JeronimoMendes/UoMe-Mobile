import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import {
  Provider as PaperProvider,
} from 'react-native-paper';
import SplashScreen from './app/screens/SplashScreen';

export default function App() {
  const [clicks, setClicks] = useState(0);

  const increment = () => {
    setClicks(clicks + 1);
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <SplashScreen />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
