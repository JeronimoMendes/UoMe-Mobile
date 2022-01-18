import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export default function MovementBar() {
	return (
		<View style={styles.barContainer}>
			<View style={styles.bar}>
				<Image style={styles.barImage} source={require('../../assets/card_example.png')}/>
				<Text>Electricity</Text>
				<View style={styles.amountCircle}>
					<Text style={styles.amountText}>12.3$</Text>
				</View>
			</View>
			<View style={styles.dateWrapper}>
				<Text style={styles.dateText}>Today</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	barContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 24
	},
	bar: {
		height: 35,
		borderRadius: 10,
		backgroundColor: '#F5CBB0',
		alignItems: 'center',
		flexDirection: 'row',
	},
	barImage: {
		height: 35,
		width: 35,
		left: -18
	},
	amountCircle: {
		height: 35,
		width: 35,
		borderRadius: 32,
		backgroundColor: '#F8680C',
		left: 8,
		alignItems: 'center',
		justifyContent: 'center'
	},
	amountText: {
		fontWeight: 'bold',
		fontSize: 12,
		color: '#fff'
	},
	dateText: {
		fontSize: 11,
		color: '#949494',
	},
	dateWrapper: {
		marginLeft: 'auto'
	}
})
