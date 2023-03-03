import React from 'react';
import {View, Text,StyleSheet,Image} from  'react-native'
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

            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081099578490753024/Pink.png'}}  
            style={{width: 60,height: 60,position: 'absolute',top:230,left:10,borderRadius: 65,}} />
            <Text style={{top:243,left:20,color: 'white',fontSize:20,fontWeight: 'bold',position: 'absolute'}}>
                Neh
            </Text>

            <Text style={{top:240,left:75,color: 'black',fontSize:20,fontWeight: 'bold'}}>
                Hungry
            </Text>

            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            Baby feel hungry. feeding breast milk or formula to  
            </Text>
            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            him/her
            </Text>


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081099578490753024/Pink.png'}}  
            style={{width: 60,height: 60,position: 'absolute',top:310,left:10,borderRadius: 65,}} />
            <Text style={{top:325,left:20,color: 'white',fontSize:20,fontWeight: 'bold',position: 'absolute'}}>
                Earih
            </Text>

            <Text style={{top:240,left:75,color: 'black',fontSize:20,fontWeight: 'bold'}}>
                Poop
            </Text>

            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            Baby  want to poop. stimulate bowel movements with
            </Text>
            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            gentle massage or warm water, and change their
            </Text>
            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            diaper promptly.
            </Text>


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081099578490753024/Pink.png'}}  
            style={{width: 60,height: 60,position: 'absolute',top:380,left:10,borderRadius: 65,}} />
            <Text style={{top:395,left:20,color: 'white',fontSize:20,fontWeight: 'bold',position: 'absolute'}}>
                Owh
            </Text>

            <Text style={{top:240,left:75,color: 'black',fontSize:20,fontWeight: 'bold'}}>
                Tried
            </Text>

            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            Baby feel tired. recommended to place the baby in   
            </Text>
            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            a safe sleeping position on their back
            </Text>


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081099578490753024/Pink.png'}}  
            style={{width: 60,height: 60,position: 'absolute',top:445,left:10,borderRadius: 65,}} />
            <Text style={{top:460,left:20,color: 'white',fontSize:20,fontWeight: 'bold',position: 'absolute'}}>
                Heh
            </Text>

            <Text style={{top:240,left:75,color: 'black',fontSize:20,fontWeight: 'bold'}}>
                Discomfort
            </Text>

            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            Baby feel discomfort. Check him/her diaper  
            </Text>
            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            and change it. 
            </Text>


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081099578490753024/Pink.png'}}  
            style={{width: 60,height: 60,position: 'absolute',top:510,left:10,borderRadius: 65,}} />
            <Text style={{top:525,left:28,color: 'white',fontSize:20,fontWeight: 'bold',position: 'absolute'}}>
                Eh
            </Text>

            <Text style={{top:240,left:75,color: 'black',fontSize:20,fontWeight: 'bold'}}>
                Burping
            </Text>

            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            Baby want to Burp. hold them upright and gently pat   
            </Text>
            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            or rub their back until they burp or show
            </Text>
            <Text style={{top:240,left:75,color: 'black',fontSize:14,}}>
            signs of relief.
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
        color: 'black',
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

