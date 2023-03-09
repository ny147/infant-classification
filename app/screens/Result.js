import React from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const Result = ({ navigation }) =>{

    Dummy = async () => {
      console.log('Hi hi...');
  }
  
      return (
          <LinearGradient
          colors={['#9DCEFF', '#92A3FD']}
          style={styles.container}>
  
              <Text style={styles.Topic}>
                  InfantCry
              </Text>
  
              <Text style={styles.Topic2}>
                  Result
              </Text>

              <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1083368418310373376/BarDummy.jpg'}}  
                style={styles.graph}  />

              <TouchableOpacity style={styles.button} 
              activeOpacity={0.8} onPress={this.Dummy }  >
                  <Text style={styles.buttonTextStyle}>ButtonName</Text>
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
          top: 80,
          left:150,  
        },
        Topic2: {
          color: 'white',
          fontSize : 34,
          fontWeight: 'bold',
          position: 'absolute',
          margin:10,
          top: 120,
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
          marginTop: 500,
          marginLeft: 60
        },
      buttonTextStyle: {
          color: '#92A3FD',
          marginBottom: 4,
          marginLeft: 70,
          justifyContent: 'center',
          fontSize:28,
          fontWeight: 'bold'
        },
        graph:{
            width: 300,
            height: 300,
            position: 'absolute',
            top:180,
            left:50,
        }
  
    });
  
  export default Result;