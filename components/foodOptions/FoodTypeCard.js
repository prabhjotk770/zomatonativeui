import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const FoodType = ({ image, title }) => {
	return (
		<Content style={styles.content}>
			<TouchableOpacity>
				<ImageBackground source={image} style={styles.image}>
					<CardItem style={styles.carditem}>
						<Text style={styles.title}>{title}</Text>
					</CardItem>
				</ImageBackground>
			</TouchableOpacity>
		</Content>
	);
};
const styles = StyleSheet.create({
	content: {
		padding: 5,
	},
	image: {
		width: '100%',
		height: 100,
		width: '100%',
		height: 100,
		borderRadius: 10,
		overflow: 'hidden',
	},
	carditem: {
		backgroundColor: 'transparent',
		marginTop: 60,
	},
	title: {
		color: 'white',
		fontWeight: '900',
	},
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
	},
});
export default FoodType;
