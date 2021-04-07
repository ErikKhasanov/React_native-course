import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import GalleryImg from '../components/GalleryImg';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    minWidth: '100%'
  }
});

const Page3 = () => {
  const [isLoading, setIsLoading] = useState('');
  const [galleryData, setGalleryData] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=30')
      .then((response) => response.json())
      .then((json) => setGalleryData(Object.values(json)))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  const renderGallery = () => galleryData.map((item) => <GalleryImg img={item.thumbnailUrl} desc={item.title} />);

  if (isLoading) return <ActivityIndicator size="large" color="white" />;

  return (
    <View style={styles.root}>
      <FlatList data={galleryData} renderItem={renderGallery} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default Page3;
