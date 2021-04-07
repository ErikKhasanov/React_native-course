import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
    backgroundColor: '#0A0A0A',
    borderRadius: 20,
    width: '70%',
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    zIndex: 1
  },
  headerText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center'
  },
  buttonStyle: {
    textAlign: 'center'
  }
});

const TapBar = ({ setActivePage, pagesArray }) => {
  const pressHandler = (value) => {
    setActivePage(value);
  };

  const renderPageSelector = (pagesArray) =>
    pagesArray.map((item, index) => (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => pressHandler(index)} key={item}>
        <Text style={styles.headerText}>{item.toUpperCase()}</Text>
      </TouchableOpacity>
    ));

  return <View style={styles.root}>{renderPageSelector(pagesArray)}</View>;
};

export default TapBar;
