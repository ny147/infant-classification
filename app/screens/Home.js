import React from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';

//hard code in context cuz lazy to declare all style
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

            <Text style={styles.Topic}>
                Baby
            </Text>

            <Text style={styles.Topic2}>
                Helper
            </Text>

            <TouchableOpacity style={styles.button} 
            activeOpacity={0.8} onPress={this.Dummy }  >
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
        top: '48%',
        marginLeft:'40%'
      },
      Topic2: {
        color: 'white',
        fontSize : 34,
        fontWeight: 'bold',
        position: 'absolute',
        top: '53%', 
        marginLeft:"40%"
      },
    button: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: '9%',
        width: '72%',
        borderRadius: 20,
        marginTop: '120%',
        marginLeft: '15%'
      },
    buttonTextStyle: {
        color: '#92A3FD',
        margin: '2%',
        marginLeft: '30%',
        justifyContent: 'center',
        fontSize:28,
        fontWeight: 'bold'
      },

  });


export default Home;