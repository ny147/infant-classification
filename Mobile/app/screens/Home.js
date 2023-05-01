


import React, { useEffect, useState} from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import MyText from '../component/MyText';


 const Home = ({ navigation }) =>{

  Dummy = async () => {
    console.log('Hi hi...');
    navigation.navigate('Infantcry');
    console.log('Hi hi2...');
}
 

 
 

 

    return (
        <LinearGradient
        colors={['#9DCEFF', '#92A3FD']}
        style={styles.container}>

            {/* <Text style={styles.Topic}>
                Baby
            </Text> */}
            {/* <Text style={styles.Topic2}>
                Helper
            </Text> */}

            {/* {"Baby\nHelper"} */}
            <MyText title="Baby" style={styles.Topic} type="bold"/>
            <MyText title="Helper" style={styles.Topic2} type="bold"/>
            

            <TouchableOpacity style={styles.button} 
            activeOpacity={0.8} onPress={this.Dummy }  >
                {/* <Text style={styles.buttonTextStyle}>Get Start</Text> */}
                <MyText title="Get Start" style={styles.buttonTextStyle} type="semibold"/>
            </TouchableOpacity>
        
        </LinearGradient>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Topic: {
        color: 'black',
        fontSize : 34,
    
        position: 'absolute',
        margin:20,
        top: 280,
        marginLeft:"35%" ,
        
      },
      Topic2: {
        color: 'white',
        fontSize : 34,
        position: 'absolute',
        margin:20,
        top: 320,
        marginLeft:"35%"
      },
    button: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 64,
        width: "72%",
        borderRadius: 20,
        marginTop: 420,
        marginLeft: "15%",
        
      },
    buttonTextStyle: {
        color: '#92A3FD',
        margin: "2%",
        marginLeft: "25%",
        justifyContent: 'center',
        fontSize:28,
        // fontWeight: 'bold',
      },

  });


export default Home;