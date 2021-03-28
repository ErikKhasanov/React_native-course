import React from 'react';
import ContactCard from './components/ContactCard'

import {
	View,
	StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

const cardData = [
	{
		name: 'Laenne Graham',
		phone: '010-692-6593 * 09125',
		address: '53198-4257, South Elvis, Hoeger Mall, Apt. 692',
		mail: 'graham@yahoo.com',
		uri: 'https://reactnative.dev/img/tiny_logo.png',
	},
	{
		name: 'Laenne Graham',
		phone: '010-692-6593 * 09125',
		address: '53198-4257, South Elvis, Hoeger Mall, Apt. 692',
		mail: 'graham@yahoo.com',
		uri: 'https://reactnative.dev/img/tiny_logo.png',
	},
	{
		name: 'Laenne Graham',
		phone: '010-692-6593 * 09125',
		address: '53198-4257, South Elvis, Hoeger Mall, Apt. 692',
		mail: 'graham@yahoo.com',
		uri: 'https://reactnative.dev/img/tiny_logo.png',
	},
	{
		name: 'Laenne Graham',
		phone: '010-692-6593 * 09125',
		address: '53198-4257, South Elvis, Hoeger Mall, Apt. 692',
		mail: 'graham@yahoo.com',
		uri: 'https://reactnative.dev/img/tiny_logo.png',
	},
	{
		name: 'Laenne Graham',
		phone: '010-692-6593 * 09125',
		address: '53198-4257, South Elvis, Hoeger Mall, Apt. 692',
		mail: 'graham@yahoo.com',
		uri: 'https://reactnative.dev/img/tiny_logo.png',
	},
]


const App = () => {
	const renderCards = () => {
	 return cardData.map((item, index) => (
			<ContactCard
				name={item.name}
				phone={item.phone}
				address={item.address}
				mail={item.mail}
				uri={item.uri}
				key={index}
			/>
		))
	}
	return (
		<View style={styles.root}>
			{renderCards()}
		</View>
	);
};

export default App;
