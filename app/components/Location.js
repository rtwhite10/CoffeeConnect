import RNLocation from 'react-native-location';
import React, {useState, useEffect} from 'react'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

const Location = () => {
const [locationData, setLocationData] = useState({})
 
RNLocation.configure({
  distanceFilter: 5.0
})
 
RNLocation.requestPermission({
    ios: 'whenInUse', // or 'always'
    android: {
      detail: 'coarse', // or 'fine'
      rationale: {
        title: "We need to access your location",
        message: "We use your location to show where you are on the map",
        buttonPositive: "OK",
        buttonNegative: "Cancel"
      }
    }
}).then(granted => {
    if (granted) {
      this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
        /* Example location returned
        {
          speed: -1,
          longitude: -0.1337,
          latitude: 51.50998,
          accuracy: 5,
          heading: -1,
          altitude: 0,
          altitudeAccuracy: -1
          floor: 0
          timestamp: 1446007304457.029,
          fromMockProvider: false
        }
        */

        useState({
          longitude: locations.longitude,
          latitude: locations.latitude,
        })

      })
    }
  })

  return(
      <View>
          <Text>longitude:{locationData.longitude}</Text>
          <Text>latitude: {locationData.latitude}</Text>
      </View>
  )
}

export default Location