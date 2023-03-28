import React from 'react';
import {View, Text,StyleSheet,Image} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Mytext from '../component/MyText'
const Info = () =>{
    return (
        <View
        style={styles.container}>

            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081138438247563304/BlueCurve.png'}}  
            style={{width: '100%',height: '36%',position: 'absolute',top:'0%',left:'0%'}} />
           
            {/* <Text style={styles.Topic} >
                Dustan Baby Language
            </Text> */}
            
            <Mytext title=" Dustan Baby Language" style={styles.Topic} type="bold"/>

            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: '14%',height: '9%',position: 'absolute',top:'41.5%',left:'3%',borderRadius: 65,}} />
           

            <Mytext title="Neh" 
            style={{top:'44%',left:'6%',color: 'white',fontSize:18,position: 'absolute'}} 
            type="semibold"/>

          
            <Mytext title="Hungry" 
            style={{top:'42%',left:'18%',color: 'black',fontSize:16}} 
            type="medium"/>

      

            <Mytext title={'Baby feel hungry. feeding breast milk or formula to\nhim/her'}
            style={{top:'42%',left:'18%',color: 'black',fontSize:12,}} 
            type="thin"/>

            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: '14%',height: '9%',position: 'absolute',top:'51.5%',left:'3%',borderRadius: 65,}} />
         
            <Mytext title={'Earih'}
            style={{top:'54%',left:'5%',color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}} 
            type="semibold"/>

       
            <Mytext title={'Poop'}
            style={{top:'43%',left:'18%',color: 'black',fontSize:16,fontWeight: 'bold'}} 
            type="medium"/>

       
            
            <Mytext title={'Baby  want to poop. stimulate bowel movements with\ngentle massage or warm water, and change their\ndiaper promptly.'}
            style={{top:'43%',left:'18%',color: 'black',fontSize:12}} type= "thin" />



            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: '14%',height: '9%',position: 'absolute',top:'62.5%',left:'3%',borderRadius: 65,}} />
            

            <Mytext title={'Owh'}
            style={{top:'65%',left:'5%',color: 'white',fontSize:18,fontWeight: 'bold',position: 'absolute'}} type= "semibold" />

            

            <Mytext title={'Tried'}
            style={{top:'43%',left:'18%',color: 'black',fontSize:16,fontWeight: 'bold'}} type= "medium" />


           
            <Mytext title={'Baby feel tired. recommended to place the baby in\na safe sleeping position on their back'}
            style={{top:'43%',left:'18%',color: 'black',fontSize:12,}} type= "thin" />

            


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: '14%',height: '9%',position: 'absolute',top:'73%',left:'3%',borderRadius: 65,}} />
            
            <Mytext title={'Heh'}
            style={{top:'75.5%',left:'6%',color: 'white',fontSize:18,position: 'absolute'}} type= "semibold" />

          

            <Mytext title={'Discomfort'}
            style={{top:'45%',left:'18%',color: 'black',fontSize:16}} type= "medium" />


       

            <Mytext title={'Baby feel discomfort. Check him/her diaper\nand change it.'}
            style={{top:'45%',left:'18%',color: 'black',fontSize:12,}} type= "thin" />
           


            <Image source={{uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png'}}  
            style={{width: '14%',height: '9%',position: 'absolute',top:'83.5%',left:'3%',borderRadius: 65,}} />
          

            
          
            <Mytext title={'Eh'}
            style={{top:'86%',left:'7.5%',color: 'white',fontSize:18,position: 'absolute'}} type= "semibold" />


            <Mytext title={'Burping'}
            style={{top:'46.5%',left:'18%',color: 'black',fontSize:16}} type= "medium" />
       

            <Mytext title={' Baby want to Burp. hold them upright and gently pat\nor rub their back until they burp or show signs of relief.'}
            style={{top:'46.5%',left:'18%',color: 'black',fontSize:12}} type= "thin" />

        
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
