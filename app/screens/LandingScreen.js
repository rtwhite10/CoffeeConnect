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
import RoasteryCard from '../components/RoasteryCard'
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
        <View style={styles.TopArea}>
          <Text style={styles.HeaderText}>Local Roastery's</Text>
        </View>
        <ScrollView style={styles.ScrollContainer}>
        <RoasteryCard />
        <RoasteryCard />
        <RoasteryCard />
        <RoasteryCard />
        <RoasteryCard />
        </ScrollView> 
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#415958',
    alignItems: 'center',
  },
  TopArea: {
    position: "absolute",
    top: 0,
    bottom: '75%',
    width: '100%',
    backgroundColor: '#607D7C',
  },
  HeaderText: {
    marginLeft: 20,
    marginTop: 50,
    fontSize: 22,
    letterSpacing: 2,
    color: '#FAD0A9' 
  },
  ScrollContainer: {
    position: 'absolute',
    top: '10%',
    bottom: '10%',
    width: '90%'
  }
});

export default LandingScreen;
