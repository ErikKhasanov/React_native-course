import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Image } from 'react-native';

import GalleryImg from '../components/GalleryImg';
import CustomModal from '../components/CustomModal';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    minWidth: '100%'
  },
  img: {
    minWidth: '100%',
    height: 100
  }
});

const Page3 = () => {
  const [isLoading, setIsLoading] = useState('');
  const [galleryData, setGalleryData] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [urlImg, setUrlImg] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=30')
      .then((response) => response.json())
      .then((json) => setGalleryData(Object.values(json)))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  const imgHandler = (img) => {
    if (isVisible) {
      setUrlImg('');
      setIsVisible(!isVisible);
      return;
    }
    setUrlImg(img);
    setIsVisible(!isVisible);
  };

  const renderGallery = () =>
    galleryData.map((item) => <GalleryImg img={item.thumbnailUrl} desc={item.title} imgHandler={imgHandler} />);

  if (isLoading) return <ActivityIndicator size="large" color="white" />;

  return (
    <View style={styles.root}>
      {isVisible && (
        <CustomModal animationType="slide" visible={isVisible} onRequestClose={imgHandler}>
          <Image source={{ uri: urlImg }} style={styles.img} />
        </CustomModal>
      )}
      <FlatList data={galleryData} renderItem={renderGallery} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default Page3;
