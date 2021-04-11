import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import TapBar from '../components/TapBar';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12
  }
});

const pagesArray = ['Contacts', 'Log In', 'Gallery'];

const Layout = ({ children, setActivePage, activePage }) => {
  const dynamicStyle = () => {
    if (activePage !== 2) return null;
    return {
      backgroundColor: '#000'
    };
  };
  return (
    <View style={[styles.root, dynamicStyle()]}>
      <Header activePage={activePage} pagesArray={pagesArray} setActivePage={setActivePage} />
      {children}
      {activePage === 0 && <TapBar setActivePage={setActivePage} pagesArray={pagesArray} />}
    </View>
  );
};

export default Layout;
