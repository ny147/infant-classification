// import React from 'react';

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import {View, Text,StyleSheet,SafeAreaView,Image,TouchableOpacity,ImageBackground} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Audio } from 'expo-av';
import mime from "mime";
import Graph from '../component/Graph';





const MainApp = () =>{
    const [iconName, setIconName] = React.useState('microphone');
    const [backgroundImage, setBackgroundImage] = React.useState({ uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100289337208963/LightGreen.png' });
    const [isHomeImage, setIsHomeImage] = React.useState(false);
    const [IsRecording,setIsRecording] = React.useState(false);
    const [recording, setRecording] = React.useState();
    const [Duration,setDuration] = React.useState(0);
    const [showGraph,setshowGraph] = React.useState(false)
    const [data,setdata] = React.useState(null)
    const [uri,seturi] = React.useState("");
    const DurationSound = useRef(new Audio.Recording());
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
        // console.log("Start up")
        let SoundFileUri = "file:/" + uri.split("file:///").join("");
        var formdata =  new FormData();
    
     
        formdata.append('file', {
    
          uri : SoundFileUri ,
     
          type: mime.getType(SoundFileUri ),
     
          name: SoundFileUri.split("/").pop()
     
         });
        // console.log(formdata);
        // console.log("Start up2")
        // https://infantcry-app-jln6p.ondigitalocean.app/infantcry
        await fetch('http://192.168.1.4:8080/infantcry/0/2',{
    
            method:'POST',
    
            Accept: 'application/json',
    
            'Content-Type': 'multipart/form-data',
    
            body: formdata
    
        }
        ).then(response => response.text())
        .then(result => {

          
          const data =  JSON.parse(result)
          const reason = data.Reason.substring(20)

          console.log(data)
          // setParsedata(data.Reason)


          // new_data = {
          //   "poop" : parseFloat(data.Emotion.poop).toFixed(2),
          //   "discomfort" : parseFloat(data.Emotion.discomfort).toFixed(2),
          //   "burping" : parseFloat(data.Emotion.burping).toFixed(2),
          //   "hungry" : parseFloat(data.Emotion.hungry).toFixed(2),
          //   "tired" : parseFloat(data.Emotion.tired).toFixed(2),
          // }

          const newdata = [
            {
                value: parseFloat(data.Emotion.poop).toFixed(2),
                label: 'poop',
            },
            {
                value: parseFloat(data.Emotion.discomfort).toFixed(2),
                label: 'discomfort',
            },
            {
                value: parseFloat(data.Emotion.burping).toFixed(2),
                label: 'burping',
            },
            {
                value: parseFloat(data.Emotion.hungry).toFixed(2),
                label: 'hungry',
            },
            {
                value: parseFloat(data.Emotion.tired).toFixed(2),
                label: 'tired',
            },
        ]
          // Alert.alert(JSON.stringify(new_data))
          setshowGraph(true)
          setdata(newdata)
          
        }
        
        )
        .catch(error => console.log('error', error));
    
        }

     

    const handlePress = () => {
        setIconName(isHomeImage ? 'microphone' : 'stop');
        setBackgroundImage(isHomeImage ? { uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100289337208963/LightGreen.png' } : { uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1083247153918517268/red.png' });
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
            
            }}  style={{width: 50,height: 50,position: 'absolute',top:42,left:350,borderRadius: 20,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',

            }}  style={{width: 414,height: 1000,position: 'absolute',top:260,borderRadius: 65,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100284392128543/LightPurple.png',

            }}  style={{width: 60,height: 60,position: 'absolute',top:260,left:260,borderRadius: 65,}} />
        

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',
            
            }}  style={{width: 350,height: 100,position: 'absolute',top:110,left:30,borderRadius: 20,}} />

            <Image source={{
                // uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1082652875135647845/Dustan_labguage_1.png',
                uri : 'https://user-images.githubusercontent.com/60291649/224925305-407df73b-4520-409a-9f94-077dee674168.png'
            
            }}  style={{width: 380,height: 100,position: 'absolute',top:335,left:10,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1082652961261498418/about_us.png',
            
            }}  style={{width: 350,height: 100,position: 'absolute',top:440,left:30,borderRadius: 20,}} />

            <Text style={styles.Topic}>
            Recorded length: {Duration}s
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
            

            <Text style={{top:380,left:60,color: 'black',fontSize:16,}}>
            Who are we ? get know
            </Text>
            <Text style={{top:380,left:110,color: '#92A3FD' ,fontSize:16,}}>
            about us   
            </Text>
            
            <TouchableOpacity onPress={handlePress} style={styles.buttonMicrophone}>
                <ImageBackground source={backgroundImage} style={styles.image}>
                <Icon name={iconName} size={80} color="white" />
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.Dummy} style={styles.buttonFolder}>
                <Icon name="folder-multiple" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.PlayBack} style={styles.buttonSkip}>
                <Icon name="skip-next" size={50} color="white" />
            </TouchableOpacity>

            



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
                <Text style={styles.buttonTextStyle3}>O Analyse emotion</Text>
            </TouchableOpacity>
            
            {showGraph && (
            // <Image
            //   source={{ uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png' }}
            //   style={styles.GraphImage}
            // />
            <Graph data = {data}/>
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
        alignItems: 'center',
        backgroundColor: '#92A3FD',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 50,
        width: 270,
        borderRadius: 20,
        marginTop: 550,
        marginLeft: 80,
      },
    buttonTextStyle3: {
        color: 'white',
        marginBottom: 4,
        marginLeft: 44,
        justifyContent: 'center',
        fontSize:20,
        fontWeight: 'bold'
      },
      image: {
        alignItems: 'center',
      },
      buttonMicrophone: {
        marginTop: 100,
        marginLeft: 162,
        marginRight:162,
        borderRadius: 40,
        overflow: 'hidden',
      },
      buttonFolder: {
        position:'absolute',
        marginTop: 50,
        marginLeft: 360,
        overflow: 'hidden',
      },
      buttonSkip: {
        position:'absolute',
        marginTop: 263,
        marginLeft: 265,
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
