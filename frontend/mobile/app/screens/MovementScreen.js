import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, TextInput, TouchableOpacity } from 'react-native';

export default function MovementScreen(props) {
	const [amount, setAmount] = useState('0');
	const [sum, setSum] = useState(true);

	const goBackAction = () => {
		props.navigation.navigate('home');
	};

	return (
		<View style={styles.screen}>
			<View style={styles.goBackWrap}>
				<Pressable style={styles.goBackButton} onPress={goBackAction}>
					<Text>Go back</Text>
				</Pressable>
			</View>
			<View style={styles.movementWrapper}>
				<View style={styles.amountFormWrapper}>
					<TouchableOpacity onPress={() => setSum(!sum)}>
						<Text style={{ fontSize: 60, color: sum ? 'green' : 'red' }}>
							{sum ? '+' : '-'}
						</Text>
					</TouchableOpacity>

					<View style={styles.amountInputWrapper}>
						<TextInput
							style={styles.textInput}
							keyboardType='number-pad'
							onChangeText={(text) => setAmount(text)}
							value={amount}
							maxLength={10} //setting limit of input
						/>
					</View>
					<Text style={{ fontSize: 60 }}>€</Text>
				</View>
				<View style={styles.descriptionWrapper}>
					<Text>Description</Text>
				</View>
				<View style={styles.splitWrapper}></View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	amountFormWrapper: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 92,
	},
	amountInputWrapper: {
		alignItems: 'center',
		backgroundColor: '#F7F5F5',
		borderRadius: 10,
		height: 80,
		justifyContent: 'center',
		marginHorizontal: 12,
		width: 190,
	},
	descriptionWrapper: {},
	goBackButton: {
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 100,
		height: 32,
		justifyContent: 'center',
		width: 74,
	},
	goBackWrap: {
		flex: 1,
		marginLeft: 24,
		marginTop: 40,
	},
	movementWrapper: {
		backgroundColor: '#fff',
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		flex: 7,
	},
	screen: {
		backgroundColor: '#F8680C',
		flexDirection: 'column',
		height: '100%',
		width: '100%',
	},
	splitWrapper: {},
	textInput: {
		fontSize: 60,
		fontWeight: 'bold',
	},
});
