import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

function GroupBox(props) {
	return (
		<TouchableOpacity
			onPress={() => props.navigation.navigate('group', { group: props.item })}
			style={[styles.card, { marginLeft: props.item.id === 1 ? 24 : 0 }]}
		>
			<Image source={props.item.image} style={styles.cardImage} />
			<Text style={styles.cardText}>{props.item.name}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#FFFCF2',
		borderRadius: 20,
		height: 150,
		justifyContent: 'flex-end',
		marginRight: 16,
		width: 140,
	},
	cardImage: {
		height: 67,
		marginBottom: 20,
		marginHorizontal: 36,
		width: 67,
	},
	cardText: {
		marginBottom: 20,
		marginHorizontal: 8,
	},
});

export default GroupBox;
