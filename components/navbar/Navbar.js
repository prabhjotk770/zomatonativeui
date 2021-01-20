import React from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

const Navbar = () => {
	return (
		<Footer style={styles.container}>
			<FooterTab>
				<Button>
					<Icon name="home" />
				</Button>
				<Button>
					<Icon name="heart" />
				</Button>
				<Button>
					<Icon name="cart" />
				</Button>
				<Button>
					<Icon name="person" />
				</Button>
			</FooterTab>
		</Footer>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		marginBottom: 0,
	},
});
export default Navbar;
