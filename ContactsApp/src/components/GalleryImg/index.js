import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderColor: '#444444',
    borderWidth: 1,
    borderRadius: 15,
    padding: 12
  },
  img: {
    minWidth: '100%',
    height: 100
  },
  description: {
    color: '#fff',
    marginTop: 12
  }
});

const GalleryImg = ({ img, desc }) => {
  return (
    <View style={styles.root}>
      <Image source={{ uri: img }} style={styles.img} />
      <Text style={styles.description}>{desc}</Text>
    </View>
  );
};

export default GalleryImg;
