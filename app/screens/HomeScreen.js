import React from 'react'
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import GroupBox from '../Components/Group/GroupBox';

const groups = [
	{
		name: 'Home',
		image: require("../assets/card_example.png"),
		id: 1,
		movements: [
			{
				id: 1,
				description: "Electricity",
				amount: 14.2,
				author: {
					name: "jeronimo",
					image: require("../assets/jeronimo.jpg")
				},
				date: "Today"
			},
			{
				id: 2,
				description: "Water bill",
				amount: 34.2,
				author: {
					name: "Ines",
					image: require("../assets/jeronimo.jpg")
				},
				date: "Yesterday"
			},
			{
				id: 3,
				description: "Dinner",
				amount: 4.1,
				author: {
					name: "jeronimo",
					image: require("../assets/jeronimo.jpg")
				},
				date: "2 days ago"
			},
			{
				id: 1,
				description: "Electricity",
				amount: 14.2,
				author: {
					name: "jeronimo",
					image: require("../assets/jeronimo.jpg")
				},
				date: "Today"
			},
			{
				id: 2,
				description: "Water bill",
				amount: 34.2,
				author: {
					name: "Ines",
					image: require("../assets/jeronimo.jpg")
				},
				date: "Yesterday"
			},
			{
				id: 3,
				description: "Dinner",
				amount: 4.1,
				author: {
					name: "jeronimo",
					image: require("../assets/jeronimo.jpg")
				},
				date: "2 days ago"
			},
			{
				id: 1,
				description: "Electricity",
				amount: 14.2,
				author: {
					name: "jeronimo",
					image: require("../assets/jeronimo.jpg")
				},
				date: "Today"
			},
			{
				id: 2,
				description: "Water bill",
				amount: 34.2,
				author: {
					name: "Ines",
					image: require("../assets/jeronimo.jpg")
				},
				date: "Yesterday"
			},
			{
				id: 3,
				description: "Dinner",
				amount: 4.1,
				author: {
					name: "jeronimo",
					image: require("../assets/jeronimo.jpg")
				},
				date: "2 days ago"
			},
			{
				id: 1,
				description: "Electricity",
				amount: 14.2,
				author: {
					name: "jeronimo",
					image: require("../assets/jeronimo.jpg")
				},
				date: "Today"
			},
			{
				id: 2,
				description: "Water bill",
				amount: 34.2,
				author: {
					name: "Ines",
					image: require("../assets/jeronimo.jpg")
				},
				date: "Yesterday"
			},
			{
				id: 3,
				description: "Dinner",
				amount: 4.1,
				author: {
					name: "jeronimo",
					image: require("../assets/jeronimo.jpg")
				},
				date: "2 days ago"
			},
			
		]
	},{
		name: 'Trip to France',
		image: require("../assets/card_example.png"),
		id: 2,
		movements: [

		]
	},{
		name: 'Family',
		image: require("../assets/card_example.png"),
		id: 3,
		movements: [
			
		]
	},
]

const people = [
	{
		name: 'Julieta',
		image: require("../assets/card_example.png"),
		id: 1
	},{
		name: 'Ines',
		image: require("../assets/card_example.png"),
		id: 2
	},{
		name: 'Tiago',
		image: require("../assets/card_example.png"),
		id: 3
	},
]

function HomeScreen({navigation}) {
	const renderGroupsItem = ({item}) => {
		return <GroupBox item={item} navigation={navigation}/>
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={require("../assets/icon.png")}/>
				<Text style={styles.headerText}>Welcome, User!</Text>
			</View>
			<View style={styles.groupsWrapper}>
				<View style={styles.groups}>
					<Text style={styles.groupsText}>Groups</Text>
					<View style={styles.groupsSeparator}/>
					<FlatList 
						data={groups}
						renderItem={renderGroupsItem}
						keyExtractor={(item) => item.id}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>
				</View>
				<View style={styles.groups}>
					<Text style={styles.groupsText}>People</Text>
					<View style={styles.groupsSeparator}/>
					<FlatList 
						data={people}
						renderItem={renderGroupsItem}
						keyExtractor={(item) => item.id}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#fff"
	},
	header: {
		flex: 1,
		margin: 24,
		flexDirection: 'row',
		alignItems: 'center',
	},
	groupsWrapper: {
		flex: 6,
		flexDirection: 'column',
	},
	headerText: {
		marginLeft: 16,
		fontSize: 14
	},
	groups: {
		marginBottom: 40
	},
	groupsText: {
		marginLeft: 24,
		fontWeight: 'bold',
		marginBottom: 4
	},
	groupsSeparator: {
		marginBottom: 24,
		backgroundColor: '#FFA451',
		width: 38,
		height: 3,
		marginLeft: 24,
		marginBottom: 20,
	}
});
  

export default HomeScreen
