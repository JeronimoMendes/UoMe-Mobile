import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

function SplashScreen({ navigation }) {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('home');
		}, 1500);
	}, []);

	return (
		<View style={styles.container}>
			<Image source={require('../assets/logo.png')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
	},
});

export default SplashScreen;
