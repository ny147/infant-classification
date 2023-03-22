// import React from 'react';

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import {ActivityIndicator,View, Text,StyleSheet,SafeAreaView,Image,TouchableOpacity,ImageBackground} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons'; 
import { Audio } from 'expo-av';
import mime from "mime";
import Graph from '../component/Graph';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';


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
    const DurationSound = useRef(new Audio.Recording());

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
    
    const RECORDING_OPTIONS_PRESET_HIGH_QUALITY = {
      android: {
        extension: '.m4a',
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 512000,
      },
      ios: {
          extension: '.m4a',
          audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 512000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
      },
    };

    useEffect(() => {
      let intervalId;
      if (IsRecording) 
      {
        intervalId = setInterval(async () => {
          const { durationMillis } = await DurationSound.current.getStatusAsync();
          
          setDuration(durationMillis / 1000);
        }, 100);
      }
      return () => {
        clearInterval(intervalId);
      };
    }, [IsRecording]);
    
    selectDocuments = async () => {
      try {
      const result = await DocumentPicker.getDocumentAsync({type: '*/*'});
      console.log('result',result);
 
        if (!result.cancelled) {
          seturi(result.uri)
     
        }

      } catch (error) {
        console.log("Error cannot read file", error);
      }
      };

      startRecording = async () => {
        try {
          console.log('Requesting permissions..');
          await Audio.requestPermissionsAsync();
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
          }); 
    
          
          console.log('Starting recording..');
          
          const record = new Audio.Recording(RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
          setIsRecording(true);
          await record.prepareToRecordAsync(RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
          await record .startAsync(); 
          setRecording(record);
          DurationSound.current = record;
          // Dusound.current = recording;
          console.log('Recording started');
        } catch (err) {
          console.error('Failed to start recording', err);
        }
      }

      stopRecording = async () => {
        console.log('Stopping recording..');
        // setRecording(undefined);
        await recording.stopAndUnloadAsync();
        // setRecording(null);
    
    
        setIsRecording(false);
        // uri  =  recording.getURI(); 
        seturi(recording.getURI());
        console.log('Recording stopped and stored at', uri);
      }

      PlayBack = async () => {
        if (!uri) { // it is null
          Alert.alert('Sound not found', 'No record sound file')
          console.log('No Sound ',uri);
          return;
       }
    
        const sound = new Audio.Sound();
        try {
          console.log('Loading Sound ',uri);
          await sound.loadAsync({ uri });
          sound.playAsync();
          console.log('End Play');
        } catch (error) {
          console.error(error);
        }
      }
    
      Upload = async () => {

        // const result = await DocumentPicker.getDocumentAsync({type: '*/*'});
        // // console.log('result',result);
        // console.log('origin',typeof result.uri);
        // console.log('check',result.uri)
      
        

        let SoundFileUri = "file:/" + uri.split("file:///").join("");
        var formdata =  new FormData();
        console.log('sounduri = ',SoundFileUri)
        
        formdata.append('file', {
    
          uri : SoundFileUri ,
     
          type: mime.getType(SoundFileUri),
          // type : result.mimeType,
     
          name: SoundFileUri.split("/").pop()
     
         });
      
        setLoading(true);
        setshowGraph(false);
        await fetch('http://192.168.1.7:8080/infantcry/0/2',{
    
            method:'POST',
    
            Accept: 'application/json',
    
            'Content-Type': 'multipart/form-data',
    
            body: formdata
    
        }
        ).then(response => response.text())
        .then(result => {

          
          const data =  JSON.parse(result)
          const reason = data.Reason.substring(20)

        
          
          newstate = [
            {
                value: parseInt(data.Emotion.poop),
                label: 'poop',
            },
            {
                value: parseInt(data.Emotion.discomfort),
                label: 'discomfort',
            },
            {
                value: parseInt(data.Emotion.burping),
                label: 'burping',
            },
            {
                value: parseInt(data.Emotion.hungry),
                label: 'hungry',
            },
            {
                value: parseInt(data.Emotion.tired),
                label: 'tired',
            },
        ]


          setshowGraph(true)
          
          setReason(data.Reason)
          setTdata([...newstate])
          console.log(newstate)
          console.log(Reason)
          
        }
        
        )
        .catch((error) => console.log('error', error));
        setLoading(false);
        console.log("hello world")
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
            
            }}  style={{width: 50,height: 50,position: 'absolute',top:42,left:"80%",borderRadius: 20,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',

            }}  style={{width: "100%",height: 1000,position: 'absolute',top:220,borderRadius: 65,}} />

            {/* <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100284392128543/LightPurple.png',

            }}  style={{width: 60,height: 60,position: 'absolute',top:260,left:260,borderRadius: 65,}} />  */}
        

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',
            
            }}  style={{width: "90%",height: 100,position: 'absolute',top:80,margin:"5%",borderRadius: 20,}} />



            {!showGraph && (
              <Image source={{
                // uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1082652875135647845/Dustan_labguage_1.png',
                uri : 'https://user-images.githubusercontent.com/60291649/224925305-407df73b-4520-409a-9f94-077dee674168.png'
            
            }}  style={{width: "100%",height: 100,position: 'absolute',top:350}} />
              )}

          {!showGraph && (
              <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1082652961261498418/about_us.png',
            
            }}  style={{width: "90%",height: 100,position: 'absolute',top:460,marginLeft:"5%",borderRadius: 20,}} />
                )}
            

            <Text style={styles.Topic}>
            Header
            </Text>

            <Text style={{top:130,left:120,color: 'black',fontSize:16,}}>
            Let’s Record your baby sound and 
            </Text>
            <Text style={{top:130,left:120,color: 'black',fontSize:16,}}>
            analyse emotion  
            </Text>

            <Text style={{top:300,left:50,color: 'white',fontSize:14,}}>
            What is Dustan baby language ? 
            </Text>
            <Text style={{top:300,left:50,color: 'white',fontSize:14,}}>
            learn about your baby  
            </Text>
            

           {!showGraph && (
             <Text style={{top:380,left:60,color: 'black',fontSize:16,}}>
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

            <View style={{flex:1,flexDirection:"row",top:0,marginLeft:"10%"}}>
            <TouchableOpacity onPress={this.PlayBack} style={styles.buttonSkip} >
                <Icon name="skip-next" size={50} color="white" />
            </TouchableOpacity>
            <Text style={{flex:4,paddingTop:20}}>Recorded length: {Duration}s</Text>
            
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
        top: 20,
        left:100,  
      },
      button1: {
        position:'absolute',
        backgroundColor: '#C58BF2',
        height: 35,
        width: 100,
        borderRadius: 20,
        marginTop: 390,
        marginLeft: 80,
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
        height: 35,
        width: 100,
        borderRadius: 20,
        marginTop: 480,
        marginLeft: 240,
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
        height: 50,
        width: "72%",
        borderRadius: 20,
        margin : "20%",
        marginTop: 580,
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
        marginTop: 80,
        // marginLeft: 162,
        // marginRight:162,
        marginLeft:"40%",
        // padding:20,
        alignItems:'center',
        justifyContent:'center',
        width:"22%",
        aspectRatio: 1/1,
        borderRadius: 40,
        overflow: 'hidden',
        // backgroundColor:"#90ee90"
        // backgroundColor:'white'
      },
      buttonFolder: {
        position:'absolute',
        marginTop: 52,
        marginLeft: "82%",
        overflow: 'hidden',
      },
      buttonSkip: {
        // position:'absolute',
        // marginTop: 263,
        // marginLeft: "20%",
        // overflow: 'hidden',
        flex:1,
        backgroundColor:"#CBC3E3",
        marginRight:"5%",
        justifyContent:'center',
        alignItems:'center',
        width:"2%",
        aspectRatio:1/1,
        borderRadius: 30,
        overflow: 'hidden',
      },
      WaitImage: {
        position:'absolute',
        width: 550,
        height: 200,
        top: 0,
        left: 0,
      },
      
})

export default MainApp;
