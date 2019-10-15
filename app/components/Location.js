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
const [locationData, setLocationData] = useState({
    speed: 0,
    longitude: 0,
    latitude: 0,
    accuracy: 0,
    heading: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    floor: 0,
    timestamp: 0,
    fromMockProvider: false
})

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
        

        setLocationData({
          speed: locations.speed,
          longitude: locations.longitude,
          latitude: locations.latitude,
          accuracy: locations.accuracy,
          heading: locations.heading,
          altitude: locations.altitude,
          altitudeAccuracy: locations.altitudeAccuracy,
          floor: locations.floor,
          timestamp: locations.timestamp,
          fromMockProvider: locations.fromMockProvider
        })
        

        console.log(locations)

        // This returns  [{"accuracy": 5, "altitude": 0, "altitudeAccuracy": -1, "course": -1, "floor": 0, "latitude": 37.785834, "longitude": -122.406417, "speed": -1, "timestamp": 1571164810964.354}]
        // When I try accessing the data though like setting setLocationData using the locations.speed for example, it returns undefined

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