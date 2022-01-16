import React from 'react'
import { Text } from 'react-native-paper'
import { StyleSheet, View } from 'react-native';
import Logo from '../Components/brandImage/Logo';


function SplashScreen() {
	console.log("Hello")
	return (
		<View style={styles.container}>
			<Logo />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
  });
  

export default SplashScreen
