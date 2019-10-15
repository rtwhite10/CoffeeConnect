import React, {useState} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

const RoasteryCard = () => {
    return(
        <View style={styles.Container}>
            <View style={styles.ImageContainer}>
                <Image source={require('../assets/manzinita.jpeg')} style={styles.Image}/>
            </View>
            <View style={styles.InfoPanel}>
                <Text style={styles.Heading}>Test Roasters</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20
        
    },
    ImageContainer: {
        height: '60%',
        width: '100%',
    },
    Image: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '100%'
    },
    InfoPanel: {
        height: '40%',
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#FAD0A9' 
    },
    Heading: {
        fontSize: 18,
        margin: 4,
        color: '#707070',
        fontWeight: '400',
        letterSpacing: 2
    }

})

export default RoasteryCard