import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import arrowIcon from '../../assets/arrow.png';
import SelectAlbum from '../SelectAlbum';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    width: 36,
    borderRadius: 50,
    backgroundColor: '#00ADD3',
    marginRight: 35
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
      {activePage === 2 && <SelectAlbum />}
    </View>
  );
};

export default Header;
