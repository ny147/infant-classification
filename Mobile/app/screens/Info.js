import React from 'react';
import {View, Text,StyleSheet,Image} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const Info = () =>{
    return (
        <View
        style={styles.container}>

            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081138438247563304/BlueCurve.png'}}  
            style={{width: 412,height: 230,position: 'absolute',top:0,left:0}} />
           
            <Text style={styles.Topic} >
                Dustan Baby Language
            </Text>

            <Text style={styles.Topic2}>
            Don't worry if you have trouble 
            determining your goals, We can help you 
            determine your goals and track your 
            goals
            </Text>

            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: 60,height: 60,position: 'absolute',top:295,left:10,borderRadius: 65,}} />
            <Text style={{top:308,left:20,color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}}>
                Neh
            </Text>

            <Text style={{top:300,left:75,color: 'black',fontSize:16,fontWeight: 'bold'}}>
                Hungry
            </Text>

            <Text style={{top:300,left:75,color: 'black',fontSize:12,}}>
            Baby feel hungry. feeding breast milk or formula to  
            </Text>
            <Text style={{top:300,left:75,color: 'black',fontSize:12,}}>
            him/her
            </Text>


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: 60,height: 60,position: 'absolute',top:360,left:10,borderRadius: 65,}} />
            <Text style={{top:375,left:20,color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}}>
                Earih
            </Text>

            <Text style={{top:300,left:75,color: 'black',fontSize:16,fontWeight: 'bold'}}>
                Poop
            </Text>

            <Text style={{top:300,left:75,color: 'black',fontSize:12,}}>
            Baby  want to poop. stimulate bowel movements with
            </Text>
            <Text style={{top:300,left:75,color: 'black',fontSize:12,}}>
            gentle massage or warm water, and change their
            </Text>
            <Text style={{top:300,left:75,color: 'black',fontSize:12,}}>
            diaper promptly.
            </Text>


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: 60,height: 60,position: 'absolute',top:430,left:10,borderRadius: 65,}} />
            <Text style={{top:445,left:20,color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}}>
                Owh
            </Text>

            <Text style={{top:305,left:75,color: 'black',fontSize:16,fontWeight: 'bold'}}>
                Tried
            </Text>

            <Text style={{top:305,left:75,color: 'black',fontSize:12,}}>
            Baby feel tired. recommended to place the baby in   
            </Text>
            <Text style={{top:305,left:75,color: 'black',fontSize:12,}}>
            a safe sleeping position on their back
            </Text>


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: 60,height: 60,position: 'absolute',top:495,left:10,borderRadius: 65,}} />
            <Text style={{top:510,left:20,color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}}>
                Heh
            </Text>

            <Text style={{top:320,left:75,color: 'black',fontSize:16,fontWeight: 'bold'}}>
                Discomfort
            </Text>

            <Text style={{top:320,left:75,color: 'black',fontSize:12,}}>
            Baby feel discomfort. Check him/her diaper  
            </Text>
            <Text style={{top:320,left:75,color: 'black',fontSize:12,}}>
            and change it. 
            </Text>


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: 60,height: 60,position: 'absolute',top:560,left:10,borderRadius: 65,}} />
            <Text style={{top:575,left:28,color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}}>
                Eh
            </Text>

            <Text style={{top:325,left:75,color: 'black',fontSize:16,fontWeight: 'bold'}}>
                Burping
            </Text>

            <Text style={{top:325,left:75,color: 'black',fontSize:12,}}>
            Baby want to Burp. hold them upright and gently pat   
            </Text>
            <Text style={{top:325,left:75,color: 'black',fontSize:12,}}>
            or rub their back until they burp or show
            </Text>
            <Text style={{top:325,left:75,color: 'black',fontSize:12,}}>
            signs of relief.
            </Text>

        
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    Topic: {
        color: 'black',
        fontSize : 22,
        fontWeight: 'bold',
        position: 'absolute',
        margin:10,
        top: 215,
        left:70,  
      },
      Topic2: {
        color: 'black',
        fontSize : 14,
        position: 'absolute',
        margin:10,
        top: 245,
        left:0,  
      },

  });

export default Info;