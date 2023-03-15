import React from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Result = ({ navigation }) =>{

  const [showImages, setShowImages] = React.useState(false);

  const handleButtonPress = () => {
    setShowImages(true);
    console.log('Show image');
  };


  Dummy = async () => {
    console.log('Hi hi...');
  }


  GotoMainApp = async () => {
    console.log('To MainApp');
    navigation.navigate('Infantcry');
  }

  
      return (
          <LinearGradient
          colors={['#9DCEFF', '#92A3FD']}
          style={styles.container}>
        
        <Image
          source={{ uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png' }}
          style={{width: 50,height: 50,position: 'absolute',top:42,left:20,borderRadius: 10,}}
        /> 

        <TouchableOpacity onPress={this.GotoMainApp} style={{position: 'absolute',top:42,left:20}}>
          <Icon name="arrow-left-bold" size={50} color="black" />
        </TouchableOpacity>
          

        {showImages && (
        <Image
          source={{ uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png' }}
          style={styles.overImage}
        />
      )}
        <Image
          source={{ uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png' }}
          style={styles.underImage}
        />
      
  
              <Text style={styles.Topic}>
                  InfantCry
              </Text>
  
              <Text style={styles.Topic2}>
                  Result
              </Text>



              <TouchableOpacity style={styles.button} 
              activeOpacity={0.8} onPress={handleButtonPress}  >
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
        overImage: {
          position: 'absolute',
          zIndex: 1,
          width: 200,
          height: 200,
          top:180,
          left:50,
          position: 'absolute',
        },
        underImage: {
          zIndex: 0,
          width: 300,
          height: 300,
          top:180,
          left:50,
          position: 'absolute',
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
            top:180,
            left:50,
            position: 'absolute',
        }
  
    });
  
  export default Result;