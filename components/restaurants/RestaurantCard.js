import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const RestaurantCard = ({ image, name, desc, rating, amount, time }) => {
	return (
		<Content style={styles.content}>
			<Card style={styles.card}>
				<TouchableOpacity>
					<CardItem cardBody>
						<ImageBackground source={image} style={{ height: 200, width: '100%' }}>
							<CardItem style={styles.wishIcon}>
								<Feather name="bookmark" size={20} color="black" />
							</CardItem>
							<CardItem style={styles.duration}>
								<Text style={{ fontSize: '13' }}>{time}mins</Text>
							</CardItem>
						</ImageBackground>
					</CardItem>
				</TouchableOpacity>

				<Card>
					<CardItem>
						<Left>
							<Text style={{ fontWeight: '400', fontSize: '20' }}>{name}</Text>
						</Left>

						<Right>
							<Entypo name="star" size={15} color="red">
								<Text style={{ color: 'black', fontSize: '13', fontWeight: '500' }}>{rating}</Text>
								<Text style={{ color: '#6e6a6a', fontSize: '13', fontWeight: '500' }}>/5</Text>
							</Entypo>
						</Right>
					</CardItem>
					<CardItem>
						<Left>
							<Text style={{ color: '#6e6a6a', fontSize: '13' }}>{desc}</Text>
						</Left>

						<Right>
							<Text style={{ color: '#858181', fontWeight: '600' }}>Rs.{amount}</Text>
						</Right>
					</CardItem>
				</Card>
			</Card>
		</Content>
	);
};
const styles = StyleSheet.create({
	content: {
		padding: 10,
	},
	card: {
		borderRadius: 10,
		overflow: 'hidden',
	},
	wishIcon: {
		width: 47,
		borderRadius: 150 / 2,
		overflow: 'hidden',
		marginLeft: 330,
		marginTop: 10,
	},
	duration: {
		width: 80,
		borderRadius: 10,
		overflow: 'hidden',
		marginLeft: 300,
		marginTop: 100,
		opacity: 0.6,
	},
});
export default RestaurantCard;
