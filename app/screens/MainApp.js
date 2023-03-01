import React from 'react';
import {View, Text,StyleSheet} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const MainApp = () =>{
    return (
        <LinearGradient
        colors={['#9DCEFF', '#92A3FD']}
        style={styles.container}>

            <Text style={styles.Topic}>
                Main App
            </Text>

        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container:{ 
        flex:1,
    },
    Topic: {
        color: 'black',
        fontSize : 28,
        fontWeight: 'bold',
        position: 'absolute',
        margin:10,
        top: 20,
        left:80,  
      },
})

export default MainApp;

