import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Modal } from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBody: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnClose: {
    position: 'absolute',
    right: 20,
    top: 20
  },
  btnIcon: {
    fontSize: 28
  }
});

const CustomModal = ({ children, animationType, visible, onRequestClose }) => {
  return (
    <View style={styles.modal}>
      <Modal animationType={animationType} visible={visible} onRequestClose={onRequestClose} transparent>
        <View style={styles.modalBody}>
          <TouchableOpacity style={styles.btnClose} onPress={onRequestClose}>
            <Text style={styles.btnIcon}>x</Text>
          </TouchableOpacity>
          {children}
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
