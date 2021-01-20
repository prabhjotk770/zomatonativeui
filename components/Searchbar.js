import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Item, Input, Icon, Header } from 'native-base';
const Searchbar = () => {
	return (
		<Header>
			<Content style={styles.searchbar}>
				<Item rounded>
					<Icon name="search" style={{ color: 'red' }} />
					<Input placeholder="Restaurant name, cuisine, or a dish..." />
				</Item>
			</Content>
		</Header>
	);
};

const styles = StyleSheet.create({
	searchbar: { flex: 1 },
});

export default Searchbar;
