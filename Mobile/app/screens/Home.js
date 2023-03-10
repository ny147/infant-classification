import React from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';

//hard code in context cuz lazy to declare all style
const Home = ({ navigation }) =>{

    return (
        <LinearGradient
        colors={['#9DCEFF', '#92A3FD']}
        style={styles.container}>

            <Text style={styles.Topic}>
                Baby
            </Text>

            <Text style={styles.Topic2}>
                Helper
            </Text>

            <TouchableOpacity style={styles.button} 
            activeOpacity={0.8} onPress={() => navigation.navigate('Infantcry')}  >
                <Text style={styles.buttonTextStyle}>Get Start</Text>
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
        fontWeight: 'bold',
        position: 'absolute',
        margin:10,
        top: 280,
        left:150,  
      },
      Topic2: {
        color: 'white',
        fontSize : 34,
        fontWeight: 'bold',
        position: 'absolute',
        margin:10,
        top: 320,
        left:150,  
      },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 64,
        width: 300,
        borderRadius: 20,
        marginTop: 450,
        marginLeft: 60
      },
    buttonTextStyle: {
        color: '#92A3FD',
        marginBottom: 4,
        marginLeft: 95,
        justifyContent: 'center',
        fontSize:28,
        fontWeight: 'bold'
      },

  });

export default Home;

