import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, LayoutAnimation, UIManager, Platform } from 'react-native';
import { addLog } from 'react-native/Libraries/LogBox/Data/LogBoxData';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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
  contentWrapper: {
    width: '70%'
  },
  nameStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ADD3'
  },
  iconStyle: {
    height: 68,
    width: 68,
    borderWidth: 4,
    borderColor: '#00ADD3',
    borderRadius: 50,
    marginRight: 25
  },
  phoneStyle: {
    fontSize: 16,
    fontWeight: '200',
    color: '#00ADD3'
  },
  contactWrapper: {
    maxHeight: 0
  },
  contactWrapper__open: {
    paddingTop: 25,
    maxHeight: 160
  },
  contactItem: {
    // margin: '10, 0'
  }
});

const App = ({ name, phone, address, mail, avatar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  };

  return (
    <TouchableOpacity onPress={toggleCard}>
      <View style={styles.cardStyle}>
        <View style={styles.avatarWrapper}>
          <Image style={styles.iconStyle} source={{ uri: avatar }} />
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.titleBox}>
            <Text style={styles.nameStyle}>{name}</Text>
            <Text style={styles.phoneStyle}>Phone: {phone}</Text>
          </View>
          <View style={[styles.contactWrapper, isOpen && styles.contactWrapper__open]}>
            <View style={styles.contactItem}>
              <Text style={styles.infoTitle}>ADDRESS</Text>
              <Text style={styles.phoneStyle}>{address}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.infoTitle}>MAIL</Text>
              <Text style={styles.phoneStyle}>{mail}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default App;
