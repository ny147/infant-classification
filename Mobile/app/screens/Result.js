import React from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Graph from '../component/Graph';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const Result = ({ navigation }) =>{

 const Dummy = async () => {
      console.log('Hi hi...');
  }
  const data = [
            {
                value: 50,
                label: 'One',
            },
            {
                value: 10,
                label: 'Two',
            },
            {
                value: 40,
                label: 'Three',
            },
            {
                value: 95,
                label: 'Four',
            },
            {
                value: 85,
                label: 'Five',
            },
        ]
  
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
              <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',
            
            }}  style={{width: 414,height: 1000,position: 'absolute',top:260,borderRadius: 65,}} />
             
              <View style={{flexDirection: 'row',marginLeft: 80}}>
              <MaterialCommunityIcons name="baby-carriage" size={36} color="black" style={{top:320}} />
                     <Text style={ styles.TopicGraph}>
                  Infant emotion
                    </Text>
             </View>
             <Graph data = {data}  />
              <TouchableOpacity style={styles.button} 
              activeOpacity={0.8} onPress={Dummy }  >
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
        },
        TopicGraph : {
                
                // marginLeft:120,
                marginLeft:20,
                top:320,
                justifyContent:'center',
                alignItems: 'center',
                fontSize:28,
                fontWeight: 'bold',
                
        }
  
    });
  
  export default Result;