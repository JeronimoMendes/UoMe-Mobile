import React from 'react';
import { View, StyleSheet, Text, Pressable, Image, FlatList } from 'react-native';
import MovementBar from '../Components/Movement/MovementBar';

export default function GroupScreen(props) {
	const group = props.route.params.group;
	const renderMovement = (movement) => {
		return <MovementBar movement={movement.item} />;
	};

	const goBackAction = () => {
		props.navigation.navigate('home');
	};

	const createMovementAction = () => {
		props.navigation.navigate('movement', { isGroup: true, item: group });
	};

	return (
		<View style={styles.screen}>
			<View style={styles.goBackWrap}>
				<Pressable style={styles.goBackButton} onPress={goBackAction}>
					<Text>Go back</Text>
				</Pressable>
			</View>
			<View style={styles.groupInfoWrapper}>
				<View style={styles.groupImageWrapper}>
					<Image style={styles.groupImage} source={group.image} />
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
					<Pressable style={styles.addMovementButton} onPress={createMovementAction}>
						<Image source={require('../assets/plus.png')} />
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	addMovementButton: {
		alignItems: 'center',
		backgroundColor: '#F5CBB0',
		borderRadius: 75,
		height: 75,
		justifyContent: 'center',
		width: 75,
	},
	addMovementButtonWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 14,
		marginTop: -14,
	},
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
	groupImage: {
		height: 100,
		width: 100,
	},
	groupImageWrapper: {
		alignItems: 'center',
		top: -50,
	},
	groupInfoWrapper: {
		backgroundColor: '#fff',
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		flex: 7,
	},
	groupNameText: {
		fontSize: 24,
		fontWeight: 'bold',
		marginLeft: 24,
		top: -40,
	},
	movementsWrapper: {
		paddingLeft: 24,
		top: -26,
	},
	screen: {
		backgroundColor: '#F8680C',
		flexDirection: 'column',
		height: '100%',
		width: '100%',
	},
});
