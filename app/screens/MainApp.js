// import React from 'react';

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import {ActivityIndicator,View, Text,StyleSheet,SafeAreaView,Image,TouchableOpacity,ImageBackground} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons'; 


const initdata = [
  {
      value: 0,
      label: 'poop',
  },
  {
      value: 0,
      label: 'discomfort',
  }
]

const MainApp = () =>{
    const [iconName, setIconName] = React.useState('microphone');
    const [backgroundImage, setBackgroundImage] = React.useState({ uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100289337208963/LightGreen.png' });
    const [BGcolor,setBGcolor] = React.useState("#90ee90")
    const [isHomeImage, setIsHomeImage] = React.useState(false);
    const [IsRecording,setIsRecording] = React.useState(false);
    const [recording, setRecording] = React.useState();
    const [Duration,setDuration] = React.useState(0);
    const [showGraph,setshowGraph] = React.useState(false)
    const [Tdata,setTdata] = React.useState(initdata)
    const [uri,seturi] = React.useState("");
    const [Reason,setReason] = React.useState("") 
    const [Loading,setLoading] = React.useState(false);
    const [wavfile,setwavfile] = React.useState();

    const colorStylees ={
      backgroundColor:BGcolor,
    }
   
   
    
    Dummy = async () => {
        console.log('Hi hi...');
    }
    Dummy2 = async () => {
        console.log('Hi hi2...');
    }
    

    useEffect(() => {

    });
    
    selectDocuments = async () => {
      
      }

      stopRecording = async () => {
        
      }

      PlayBack = async () => {
       
      }
    
      Upload = async () => {
        }

      

    const handlePress = () => {
        setIconName(isHomeImage ? 'microphone' : 'stop');
       
        // setBackgroundImage(isHomeImage ? { uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100289337208963/LightGreen.png' } : { uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1083247153918517268/red.png' });
        setBGcolor(isHomeImage ? "#90ee90":"#FF7377")
      if (iconName === 'microphone') {
        this.startRecording()
      }
      if(iconName === 'stop'){
        this.stopRecording()
      }
      setIsHomeImage(!isHomeImage);
    };

    

    return (
        <LinearGradient
        colors={['#9DCEFF', '#92A3FD']}
        style={styles.container}>

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',
            
            }}  style={{width: '11%',height: '8%',position: 'absolute',top:'6.8%',left:"80%",borderRadius: 20,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',

            }}  style={{width: "100%",height: '100%',position: 'absolute',top:'36%',borderRadius: 65,}} />

            {/* <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100284392128543/LightPurple.png',

            }}  style={{width: 60,height: 60,position: 'absolute',top:260,left:260,borderRadius: 65,}} />  */}
        

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',
            
            }}  style={{width: "90%",height: '12.2%',position: 'absolute',top:'12%',margin:"5%",borderRadius: 20,}} />



            {!showGraph && (
              <Image source={{
                // uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1082652875135647845/Dustan_labguage_1.png',
                uri : 'https://user-images.githubusercontent.com/60291649/224925305-407df73b-4520-409a-9f94-077dee674168.png'
            
            }}  style={{width: "100%",height: '14%',position: 'absolute',top:'54%'}} />
              )}

          {!showGraph && (
              <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1082652961261498418/about_us.png',
            
            }}  style={{width: "90%",height: '15%',position: 'absolute',top:'70%',marginLeft:"5%",borderRadius: 20,}} />
                )}
            

            <Text style={styles.Topic}>
            Header
            </Text>

            <Text style={{top:'21%',left:'29%',color: 'black',fontSize:16,}}>
            Let’s Record your baby sound and 
            </Text>
            <Text style={{top:'20%',left:'29%',color: 'black',fontSize:16,}}>
            analyse emotion  
            </Text>

            <Text style={{top:'48%',left:'12%',color: 'white',fontSize:14,}}>
            What is Dustan baby language ? 
            </Text>
            <Text style={{top:'47%',left:'12%',color: 'white',fontSize:14,}}>
            learn about your baby  
            </Text>
            

           {!showGraph && (
             <Text style={{top:'64%',left:'15%',color: 'black',fontSize:16,}}>
             Who are we ? get know
             </Text>
           )}

            {/* <Text style={{top:380,left:110,color: '#92A3FD' ,fontSize:16,}}>
            about us   
            </Text> */}
            
            <TouchableOpacity onPress={handlePress} style={[styles.buttonMicrophone,colorStylees]}>

                <Icon name={iconName} size={50} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.selectDocuments} style={styles.buttonFolder}>
                <Icon name="folder-multiple" size={30} color="black" />
            </TouchableOpacity>

            <View style={{flex:1,flexDirection:"row",top:'0%',marginLeft:"10%"}}>
            <TouchableOpacity onPress={this.PlayBack} style={styles.buttonSkip} >
                <Icon name="skip-next" size={50} color="white" />
            </TouchableOpacity>
            <Text style={{top:'30%',left:'12%',flex:4}}>Recorded length: {Duration}s</Text>
            
            </View>

            



            {!showGraph && (
              <TouchableOpacity style={styles.button1} 
              activeOpacity={0.8} onPress={this.Dummy}  >
                  <Text style={styles.buttonTextStyle1}>View More</Text>
              </TouchableOpacity>
          )}

              
              {!showGraph && (
                <TouchableOpacity style={styles.button2} 
              activeOpacity={0.8} onPress={this.Dummy}  >
                  <Text style={styles.buttonTextStyle2}>Learn more</Text>
              </TouchableOpacity>
              )}
               
            <TouchableOpacity style={styles.button3} 
            activeOpacity={0.8} onPress={this.Upload}  >
              <AntDesign  name="dashboard" size={24} color="white" />
              <Text style={styles.buttonTextStyle3}>Analyse emotion</Text>
            </TouchableOpacity>
            
            {showGraph && (
            
            <Graph data = {Tdata}/>
         
             )}

            {Loading && !showGraph && (
              <View style={{justifyContent: 'center'}}>
                <ActivityIndicator size="large" color="#00ff00" style={{marginTop:50}}/>
              </View>
                
            )}

        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    
    container:{ 
        flex:1,
    },
    Topic: {
        color: 'black',
        fontSize : 28,
        fontWeight: 'bold',
        position: 'absolute',
        margin:10,
        top: '5%',
        left:'33%',  
      },
      button1: {
        position:'absolute',
        backgroundColor: '#C58BF2',
        height: '5%',
        width: '25%',
        borderRadius: 20,
        top: '61%',
        left: '15%',
      },
    buttonTextStyle1: {
        color: 'white',
        marginTop :5,
        marginLeft: 10,
        justifyContent: 'center',
        fontSize:16,
        fontWeight: 'bold'
      },
      button2: {
        position:'absolute',
        backgroundColor: '#92A3FD',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: '6%',
        width: '25%',
        borderRadius: 20,
        top: '75%',
        left: '65%',
      },
    buttonTextStyle2: {
        color: 'white',
        marginTop :5,
        marginLeft: 10,
        justifyContent: 'center',
        fontSize:16,
        fontWeight: 'bold'
      },
      button3: {
        position:'absolute',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#92A3FD',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: "8%",
        width: "72%",
        borderRadius: 20,
        margin : "20%",
        top: "75%",
        margin : "18%",
        
      },
    buttonTextStyle3: {
        color: 'white',
        margin:"2%",
        marginLeft:"4%",
        justifyContent: 'center',
        fontSize:20,
        fontWeight: 'bold'
      },
      image: {
        
        borderRadius:20,
        height:"40%",
        width:"100%"
      },
      buttonMicrophone: {
        top: "15%",
        left:"40%",
        alignItems:'center',
        justifyContent:'center',
        width:"22%",
        aspectRatio: 1/1,
        borderRadius: 40,
        overflow: 'hidden',
      },
      buttonFolder: {
        position:'absolute',
        marginTop: 52,
        marginLeft: "82%",
        overflow: 'hidden',
      },
      buttonSkip: {
        flex:1,
        backgroundColor:"#CBC3E3",
        left:"5%",
        top:"15%",
        justifyContent:'center',
        alignItems:'center',
        width:"2%",
        aspectRatio:1/1,
        borderRadius: 30,
        overflow: 'hidden',
      },
      WaitImage: {
        position:'absolute',
        width: '100%',
        height: '100%',
        top: '0%',
        left: '0%',
      },
      
})

export default MainApp;
