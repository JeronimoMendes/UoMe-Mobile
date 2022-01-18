import React from 'react'
import { View, StyleSheet, Text, Pressable, Image, FlatList } from 'react-native'
import MovementBar from '../Components/Movement/MovementBar'

export default function GroupScreen(props) {
	const group = props.route.params.group
	const renderMovement = (movement) => {
		return <MovementBar movement={movement.item}/>
	}

	const goBackAction = () => {
		props.navigation.navigate("home")
	}

	return (
		<View style={styles.screen}>
			<View style={styles.goBackWrap}>
				<Pressable style={styles.goBackButton} onPress={goBackAction}>
					<Text>Go back</Text>
				</Pressable>
			</View>
			<View style={styles.groupInfoWrapper}>
				<View style={styles.groupImageWrapper}>
					<Image style={styles.groupImage} source={group.image}/>
				</View>
				<Text style={styles.groupNameText}>{group.name}</Text>
				<FlatList 
					style={styles.movementsWrapper}
					data={group.movements}
					renderItem={renderMovement}
					keyExtractor={(item) => item.id}
					vertical
					showsVerticalScrollIndicator={false}
				/>
				<View style={styles.addMovementButtonWrapper}>
					<Pressable style={styles.addMovementButton}>
						<Image source={require("../assets/plus.png")}/>
					</Pressable>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: '#F8680C',
		height: '100%',
		width: '100%',
		flexDirection: "column",
	},
	goBackWrap: {
		marginTop: 40,
		marginLeft: 24,
		flex: 1
	},
	goBackButton: {
		width: 74,
		height: 32,
		backgroundColor: '#fff',
		alignItems: 'center',
    	justifyContent: 'center',
		borderRadius: 100,	
	},
	groupInfoWrapper: {
		backgroundColor: "#fff",
		flex: 7,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
	},
	groupImage: {
		width: 100,
		height: 100
	},
	groupImageWrapper: {
		alignItems: 'center',
		top: -50
	},
	groupNameText: {
		fontWeight: 'bold',
		marginLeft: 24,
		fontSize: 24,
		top: -40
	},
	movementsWrapper: {
		paddingLeft: 24,
		top: -26,
	},
	addMovementButton: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 75,
		height: 75,
		borderRadius: 75,
		backgroundColor: '#F5CBB0'
	},
	addMovementButtonText: {
	},
	addMovementButtonWrapper: {
		marginTop: -14,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 14
	}
})
