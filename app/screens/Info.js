import React from 'react';
import {View, Text,StyleSheet} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const Info = () =>{
    return (
        <LinearGradient
        colors={['#9DCEFF', '#92A3FD']}
        style={styles.container}>

            <Text style={styles.Topic} >
                Dustan Baby Language
            </Text>

            <Text style={styles.Topic2}>
            Don't worry if you have trouble 
            determining your goals, We can help you 
            determine your goals and track your 
            goals
            </Text>

            
            <Text style={{top:230,left:20,color: 'red',fontSize:24,fontWeight: 'bold'}}>
                put something instead me
            </Text>

            <Text style={{top:240,left:20,color: 'black',fontSize:18,}}>
                put something instead me too
            </Text>

        
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Topic: {
        color: 'black',
        fontSize : 36,
        fontWeight: 'bold',
        position: 'absolute',
        margin:10,
        top: 100,
        left:11,  
      },
      Topic2: {
        color: 'white',
        fontSize : 16,
        //fontWeight: 'bold',
        position: 'absolute',
        margin:10,
        top: 150,
        left:0,  
      },
      TextTopic: {
        color: 'red',
        fontSize:24,
        fontWeight: 'bold',
        
      },

  });

export default Info;

