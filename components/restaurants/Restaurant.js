import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import RestaurantCard from './RestaurantCard';

const Restaurant = () => {
	return (
		<Content>
			<View>
				<Text style={styles.title}>1714 restaurants around you</Text>
			</View>

			<RestaurantCard
				image={{ uri: 'https://i.pinimg.com/originals/8e/f5/b5/8ef5b561f6059b8752fe2265729a8080.jpg' }}
				name="Pizza hut"
				desc="Pizza, pasta, Finger food "
				rating="3.9"
				amount="600 for two"
				time="27 "
			/>
			<RestaurantCard
				image={{
					uri:
						'https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2020/05/27/120153-mcd.jpg?itok=yyPpDIZR',
				}}
				name="McDonald's"
				desc="Burger, Fast Food, Beverages"
				rating="4.2"
				amount="200 for one"
				time="39 "
			/>
			<RestaurantCard
				image={{ uri: 'https://loperaindia.com/wp-content/uploads/2020/05/New-Macaron-Box-of-9.jpg' }}
				name="L'Opera"
				desc="Bakery, Dessert, Beverages "
				rating="3.9"
				amount="800 for two"
				time="15 "
			/>
			<RestaurantCard
				image={{ uri: 'https://b.zmtcdn.com/data/pictures/chains/5/305/d78e6b78af4d11f25db57b30073740e3.jpeg' }}
				name="Sagar Ratna"
				desc="South Indian, Chinese, Desserts "
				rating="4.1"
				amount="550 for two"
				time="25 "
			/>
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
export default Restaurant;
