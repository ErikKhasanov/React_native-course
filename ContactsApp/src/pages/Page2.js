import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    minWidth: '100%',
    borderWidth: 1,
    borderColor: '#C0C1C1',
    borderRadius: 15,
    height: 51,
    margin: 20,
    color: '#C0C1C1',
    textAlign: 'center'
  },
  btn: {
    marginTop: 100,
    padding: 15,
    minWidth: '85%',
    backgroundColor: '#00ADD3',
    alignItems: 'center',
    borderRadius: 20
  },
  btnTitle: {
    color: '#fff'
  }
});

const Page2 = ({ setActivePage }) => {
  const submitHandler = () => {
    setActivePage(2);
  };
  return (
    <View style={styles.root}>
      <TextInput style={styles.input} placeholder="Enter your Login" />
      <TextInput style={styles.input} placeholder="Enter your Password" />
      <TouchableOpacity style={styles.btn} onPress={() => submitHandler()}>
        <Text style={styles.btnTitle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page2;
