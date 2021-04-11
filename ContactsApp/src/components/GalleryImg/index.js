import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderColor: '#444444',
    borderWidth: 1,
    borderRadius: 15,
    padding: 12,
    marginBottom: 20,
    marginTop: 20
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

const GalleryImg = ({ img, desc, imgHandler }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => imgHandler(img)}>
        <Image source={{ uri: img }} style={styles.img} />
        <Text style={styles.description}>{desc}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GalleryImg;
