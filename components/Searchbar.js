import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
class Searchbar extends Component {
	render() {
		return (
			<Content style={styles.searchbar}>
				<Item rounded>
					<Icon name="search" style={{ color: 'red' }} />
					<Input placeholder="Restaurant name, cuisine, or a dish..." />
				</Item>
			</Content>
		);
	}
}
const styles = StyleSheet.create({
	searchbar: {},
});

export default Searchbar;
