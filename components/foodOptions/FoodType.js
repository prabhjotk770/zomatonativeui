import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import FoodTypeCard from './FoodTypeCard';

const FoodType = () => {
	return (
		<Content>
			<View>
				<Text style={styles.title}>Eat what makes you happy</Text>
			</View>

			<Grid>
				<Col>
					<Row>
						<FoodTypeCard
							image={{
								uri:
									'https://www.wallpaperflare.com/static/729/236/30/salad-vegetables-delicious-diet-wallpaper.jpg',
							}}
							title="Healthy"
						/>
					</Row>
					<Row>
						<FoodTypeCard
							image={{
								uri:
									'https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-cheese-tomatoes-olives-hd-wallpaper-preview.jpg',
							}}
							title="Cake"
						/>
					</Row>
				</Col>
				<Col>
					<Row>
						<FoodTypeCard
							image={{
								uri:
									'https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-cheese-tomatoes-olives-hd-wallpaper-preview.jpg',
							}}
							title="Pizza"
						/>
					</Row>
					<Row>
						<FoodTypeCard
							image={{
								uri: 'https://i.pinimg.com/originals/b4/98/d2/b498d219990d8dd16bb27c4c79971420.jpg',
							}}
							title="Burger"
						/>
					</Row>
				</Col>
				<Col>
					<Row>
						<FoodTypeCard
							image={{
								uri: 'https://wallpapercave.com/wp/wp3074963.jpg',
							}}
							title="Rolls"
						/>
					</Row>
					<Row>
						<FoodTypeCard
							image={{
								uri:
									'https://wallpapermemory.com/uploads/817/chicken-food-background-hd-1920x1280-378505.jpg',
							}}
							title="Chicken"
						/>
					</Row>
				</Col>
				<Col>
					<Row>
						<FoodTypeCard
							image={{
								uri:
									'https://thumbs.dreamstime.com/b/indian-food-thali-style-meal-chicken-meat-masala-tea-chai-wooden-table-138439693.jpg',
							}}
							title="Thali"
						/>
					</Row>
					<Row>
						<FoodTypeCard
							image={{
								uri: 'https://www.steppestravel.com/app/uploads/2020/05/tibetan-momo.jpg',
							}}
							title="Momos"
						/>
					</Row>
				</Col>
			</Grid>
		</Content>
	);
};
const styles = StyleSheet.create({
	title: {
		color: 'black',
		fontWeight: '600',
		fontSize: 20,
		marginLeft: 10,
		marginBottom: 10,
	},
});
export default FoodType;
