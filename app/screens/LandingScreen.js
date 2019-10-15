/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import { PermissionsAndroid } from 'react-native';
import Location from '../components/Location'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const LandingScreen = () => {


  return (
    <>
      <View style={styles.Container}>
        <Location />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LandingScreen;
