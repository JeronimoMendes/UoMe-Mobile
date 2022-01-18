import { StyleSheet, View } from 'react-native';
import {
	Provider as PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/HomeScreen';
import SplashScreen from './app/screens/SplashScreen';
import GroupScreen from './app/screens/GroupScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<View style={styles.container}>
					<Stack.Navigator>
						<Stack.Screen name="splash" component={SplashScreen} options={{headerShown: false}}/>
						<Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>
						<Stack.Screen name="group" component={GroupScreen} options={{headerShown: false}}/>
					</Stack.Navigator>
				</View>
			</NavigationContainer>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	},
});
