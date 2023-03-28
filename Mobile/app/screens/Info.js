import React from 'react';
import {View, Text,StyleSheet,Image} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const Info = () =>{
    return (
        <View
        style={styles.container}>

            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081138438247563304/BlueCurve.png'}}  
            style={{width: '100%',height: '36%',position: 'absolute',top:'0%',left:'0%'}} />
           
            <Text style={styles.Topic} >
                Dustan Baby Language
            </Text>

            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: '14%',height: '9%',position: 'absolute',top:'41.5%',left:'3%',borderRadius: 65,}} />
            <Text style={{top:'44%',left:'6%',color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}}>
                Neh
            </Text>

            <Text style={{top:'42%',left:'18%',color: 'black',fontSize:16,fontWeight: 'bold'}}>
                Hungry
            </Text>

            <Text style={{top:'42%',left:'18%',color: 'black',fontSize:12,}}>
            Baby feel hungry. feeding breast milk or formula to{'\n'}him/her  
            </Text>
           
            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: '14%',height: '9%',position: 'absolute',top:'51.5%',left:'3%',borderRadius: 65,}} />
            <Text style={{top:'54%',left:'5%',color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}}>
                Earih
            </Text>

            <Text style={{top:'43%',left:'18%',color: 'black',fontSize:16,fontWeight: 'bold'}}>
                Poop
            </Text>

            <Text style={{top:'43%',left:'18%',color: 'black',fontSize:12,}}>
            Baby  want to poop. stimulate bowel movements with{'\n'}gentle massage or warm water, and change their{'\n'}diaper promptly.
            </Text>
            



            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: '14%',height: '9%',position: 'absolute',top:'62.5%',left:'3%',borderRadius: 65,}} />
            <Text style={{top:'65%',left:'5%',color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}}>
                Owh
            </Text>

            <Text style={{top:'43%',left:'18%',color: 'black',fontSize:16,fontWeight: 'bold'}}>
                Tried
            </Text>

            <Text style={{top:'43%',left:'18%',color: 'black',fontSize:12,}}>
            Baby feel tired. recommended to place the baby in{'\n'}a safe sleeping position on their back
            </Text>
            


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: '14%',height: '9%',position: 'absolute',top:'73%',left:'3%',borderRadius: 65,}} />
            <Text style={{top:'75.5%',left:'6%',color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}}>
                Heh
            </Text>

            <Text style={{top:'45%',left:'18%',color: 'black',fontSize:16,fontWeight: 'bold'}}>
                Discomfort
            </Text>

            <Text style={{top:'45%',left:'18%',color: 'black',fontSize:12,}}>
            Baby feel discomfort. Check him/her diaper{'\n'}and change it.  
            </Text>
           


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: '14%',height: '9%',position: 'absolute',top:'83.5%',left:'3%',borderRadius: 65,}} />
            <Text style={{top:'86%',left:'7.5%',color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}}>
                Eh
            </Text>

            <Text style={{top:'46.5%',left:'18%',color: 'black',fontSize:16,fontWeight: 'bold'}}>
                Burping
            </Text>

            <Text style={{top:'46.5%',left:'18%',color: 'black',fontSize:12,}}>
            Baby want to Burp. hold them upright and gently pat{'\n'}or rub their back until they burp or show signs of relief.  
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
        top: '34%',
        left:'20%',  
      },
      Topic2: {
        color: 'black',
        fontSize : 14,
        position: 'absolute',
        margin:10,
        top: '39%',
        left:'0%',  
      },

  });

export default Info;
