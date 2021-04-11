import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import CustomModal from '../CustomModal';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    color: '#00ADD3',
    textDecoration: 'underline',
    marginRight: 10,
    fontSize: 16
  },
  circleCount: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    backgroundColor: '#00ADD3',
    borderRadius: 100
  },
  pickerWrapper: {
    width: 300,
    border: 'grey',
    borderWidth: 1
  }
});

const SelectAlbum = () => {
  const [album, setAlbum] = useState(1);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const selectHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <View style={styles.root}>
      <View>
        <TouchableOpacity onPress={selectHandler}>
          <Text style={styles.btn}>Select Album</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.circleCount}>
          <Text style={{ color: '#fff' }}>{album}</Text>
        </View>
      </View>
      <View style={styles.modal}>
        <CustomModal animationType="slide" visible={modalIsVisible} onRequestClose={selectHandler}>
          <View style={styles.pickerWrapper}>
            <Picker selectedValue={album} onValueChange={(itemValue) => setAlbum(itemValue)}>
              <Picker.Item label="Выбрать альбом 1" value="1" />
              <Picker.Item label="Выбрать альбом 2" value="2" />
              <Picker.Item label="Выбрать альбом 3" value="3" />
            </Picker>
          </View>
        </CustomModal>
      </View>
    </View>
  );
};

export default SelectAlbum;
