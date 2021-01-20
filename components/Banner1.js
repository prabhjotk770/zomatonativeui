import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

import { StyleSheet, View } from 'react-native';

const Banner1 = () => {
	return (
		<Content padder>
			<ImageBackground
				source={{
					uri: 'https://www.zomato.com/webroutes/zoomBackgrounds/downloadImage?title=Everyday%20Sundae',
				}}
				style={styles.banner}
			>
				<CardItem style={styles.cardItem}>
					<Text
						style={{ color: 'white', fontSize: 20, fontWeight: '800', marginLeft: 20, marginTop: 20 }}
					>{`Dishes that you crave,\noffers that you love`}</Text>
				</CardItem>
				<CardItem style={styles.cardItem}>
					<Text style={{ color: 'white', marginLeft: 20, marginTop: 20 }}>The best offers for you</Text>
				</CardItem>
				<TouchableOpacity>
					<Card style={{ backgroundColor: 'black', width: 150, marginLeft: 20 }}>
						<CardItem style={{ backgroundColor: 'black' }}>
							<Text style={{ color: 'white' }}>UP TO 50% OFF</Text>
						</CardItem>
					</Card>
				</TouchableOpacity>
			</ImageBackground>
		</Content>
	);
};

const styles = StyleSheet.create({
	banner: {
		width: '100%',
		height: 200,
		borderRadius: 10,
		overflow: 'hidden',
		borderWidth: 3,
		borderColor: 'red',
	},
	cardItem: {
		backgroundColor: 'transparent',
	},
	card: { borderRadius: 20, overflow: 'hidden', borderWidth: 3, borderColor: 'red' },
});

export default Banner1;
