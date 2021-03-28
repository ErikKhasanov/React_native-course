import React, {useState} from 'react';

import {
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

const styles = StyleSheet.create({
	cardStyle: {
		flexDirection: 'row',
		minWidth: '95%',
		backgroundColor: '#E5E5E5',
		borderRadius: 10,
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 30,
		paddingRight: 30,
		marginVertical: 10
	},
	avatarWrapper: {
		width: '30%'
	},
	contentWrapper: {
		width: '70%'
	},
	nameStyle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#00ADD3'
	},
	iconStyle: {
		height: 64,
		width: 64,
		borderRadius: 30
	},
	phoneStyle: {
		fontSize: 16,
		fontWeight: '200',
		color: '#00ADD3'
	},
	contactWrapper: {
		maxHeight: 0,
	},
	contactWrapper__open: {
		paddingTop: 25,
		maxHeight: 160
	},
	contactItem: {
		// margin: '10, 0'
	}
});

const App = ({name, phone, address, mail, uri}) => {
	const [isOpen, setIsOpen] = useState(false)

	console.log(uri)

	const toggleCard = () => {
		setIsOpen(!isOpen);
	}

	return (
		<TouchableOpacity onPress={toggleCard}>
			<View style={styles.cardStyle}>
				<View style={styles.avatarWrapper}>
					<Image
						source={{uri: uri}}
						style={styles.iconStyle}
					/>
				</View>
				<View style={styles.contentWrapper}>
					<View style={styles.titleBox}>
						<Text style={styles.nameStyle}>
							{name}
						</Text>
						<Text style={styles.phoneStyle}>
							{phone}
						</Text>
					</View>
					<View style={[styles.contactWrapper, isOpen && styles.contactWrapper__open]}>
						<View style={styles.contactItem}>
							<Text style={styles.infoTitle}>
								ADDRESS
							</Text>
							<Text style={styles.phoneStyle}>
								{address}
							</Text>
						</View>
						<View style={styles.contactItem}>
							<Text style={styles.infoTitle}>
								MAIL
							</Text>
							<Text style={styles.phoneStyle}>
								{mail}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default App;
