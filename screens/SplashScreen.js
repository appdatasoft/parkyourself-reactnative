import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash.png')}
        resizeMode='contain'
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
});

export default SplashScreen;
