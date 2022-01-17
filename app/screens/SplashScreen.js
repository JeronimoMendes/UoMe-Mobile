import React from 'react'
import { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

function SplashScreen({navigation}) {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('home')
		}, 1500)
	}, [])

	return (
		<View style={styles.container}>
			<Image 
				source={require("../assets/logo.png")}
			/>
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
