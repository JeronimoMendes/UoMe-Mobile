import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

function GroupBox(props) {
	return (
		<View style={[styles.card, {marginLeft: props.item.id === 1 ? 24 : 0}]}>
			<Image source={props.item.image} style={styles.cardImage}/>
			<Text style={styles.cardText}>{props.item.name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		backgroundColor: '#FFFCF2',
		height: 150,
		width: 140,
		borderRadius: 20,
		justifyContent: 'flex-end',
		marginRight: 16,

	},
	cardImage: {
		width: 67,
		height: 67,
		marginHorizontal: 36,
		marginBottom: 20
	},
	cardText: {
		marginHorizontal: 8,
		marginBottom: 20,
	}
})

export default GroupBox
