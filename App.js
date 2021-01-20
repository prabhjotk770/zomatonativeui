import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from './components/navbar/Navbar';
import Searchbar from './components/Searchbar';
import { Container } from 'native-base';
import Banner1 from './components/Banner1';
import FoodType from './components/foodOptions/FoodType';
import Restaurant from './components/restaurants/Restaurant';

export default function App() {
	return (
		<Container>
			<ScrollView>
				<View style={styles.container}>
					<Searchbar />
					<Banner1 />
					<FoodType />
					<Restaurant />
				</View>
			</ScrollView>
			<View>
				<Navbar />
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
