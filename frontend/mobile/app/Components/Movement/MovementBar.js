import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function MovementBar({ movement }) {
	return (
		<View style={styles.barContainer}>
			<View style={styles.bar}>
				<Image style={styles.barImage} source={movement.author.image} />
				<Text>{movement.description}</Text>
				<View style={styles.amountCircle}>
					<Text style={styles.amountText}>{movement.amount}$</Text>
				</View>
			</View>
			<View style={styles.dateWrapper}>
				<Text style={styles.dateText}>{movement.date}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	amountCircle: {
		alignItems: 'center',
		backgroundColor: '#F8680C',
		borderRadius: 32,
		height: 35,
		justifyContent: 'center',
		left: 8,
		width: 35,
	},
	amountText: {
		color: '#fff',
		fontSize: 12,
		fontWeight: 'bold',
	},
	bar: {
		alignItems: 'center',
		backgroundColor: '#F5CBB0',
		borderRadius: 10,
		flexDirection: 'row',
		height: 35,
	},
	barContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 12,
		marginLeft: 18,
		marginRight: 24,
	},
	barImage: {
		borderRadius: 35,
		height: 35,
		left: -18,
		width: 35,
	},
	dateText: {
		color: '#949494',
		fontSize: 11,
	},
	dateWrapper: {
		marginLeft: 'auto',
	},
});
