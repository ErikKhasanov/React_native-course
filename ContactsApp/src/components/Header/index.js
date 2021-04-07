import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import arrowIcon from '../../assets/arrow.png';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 20,
    left: 0,
    right: 0
  },
  pagesName: {
    color: '#000',
    fontSize: 28,
    fontWeight: '600'
  },
  back: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 20,
    height: 36,
    width: 36,
    borderRadius: 50,
    backgroundColor: '#00ADD3'
  },
  img: {
    width: 20,
    height: 20
  }
});

const Header = ({ activePage, pagesArray, setActivePage }) => {
  const dynamicStyle = () => {
    if (activePage !== 2) return null;
    return {
      color: '#fff'
    };
  };
  return (
    <View style={styles.root}>
      {activePage !== 0 && (
        <TouchableOpacity style={styles.back} onPress={() => setActivePage(0)}>
          <Image style={styles.img} source={arrowIcon} />
        </TouchableOpacity>
      )}
      <Text style={[styles.pagesName, dynamicStyle()]}>{pagesArray[activePage]}</Text>
    </View>
  );
};

export default Header;
