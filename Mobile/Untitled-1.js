
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import {   SafeAreaView,StyleSheet,View,Text,Image,TouchableOpacity,Alert, } from 'react-native';


import { Audio } from 'expo-av';
import * as DocumentPicker from 'expo-document-picker';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import mime from "mime";

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


const App = () => {
  let state='unknow'
  const [recording, setRecording] = React.useState();
  const [pasrsedata,setParsedata] = React.useState("unknow");
  const [clickbutton,setClickbutton] = React.useState("Start record");
  const [sound, setSound] = React.useState();
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [uri,seturi] = React.useState("");
  
  const Dusound = useRef(new Audio.Recording());
  const [IsRecording,setIsRecording] = React.useState(false);
  const [Duration,setRecordDuration] = React.useState(0);

  
  useEffect(() => {
    let intervalId;
    if (IsRecording) 
    {
      intervalId = setInterval(async () => {
        const { durationMillis } = await Dusound.current.getStatusAsync();
        setRecordDuration(durationMillis / 1000);
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

    
      
      const recording = new Audio.Recording(RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      setIsRecording(true);
      await recording.prepareToRecordAsync(RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync(); 

      setRecording(recording);
      Dusound.current = recording;
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
    seturi(recording.getURI())
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
      setIsPlaying(true);
      console.log('End Play');
    } catch (error) {
      console.error(error);
    }
  }

  Upload = async () => {
    console.log("Start up")
    console.log(uri)
    let SoundFileUri = await "file:/" + uri.split("file:///").join("");
    var formdata = await new FormData();

 
    formdata.append('file', {

      uri : SoundFileUri ,
 
      type: mime.getType(SoundFileUri ),
 
      name: SoundFileUri.split("/").pop()
 
     });
    // console.log(formdata);
    // console.log("Start up2")
    // https://infantcry-app-jln6p.ondigitalocean.app/infantcry
    await fetch('http://192.168.1.8:8080/infantcry/0/2', {

        method:'POST',

        Accept: 'application/json',

        'Content-Type': 'multipart/form-data',

        body: formdata

    }
    ).then(response => response.text())
    .then(result => {
      const data =  JSON.parse(result)
      // const reason = data.Reason.substring(20)
      console.log(data)
      setParsedata(data.Reason)
      new_data = {
        "poop" : parseFloat(data.Emotion.poop).toFixed(2),
        "discomfort" : parseFloat(data.Emotion.discomfort).toFixed(2),
        "burping" : parseFloat(data.Emotion.burping).toFixed(2),
        "hungry" : parseFloat(data.Emotion.hungry).toFixed(2),
        "tired" : parseFloat(data.Emotion.tired).toFixed(2),
      }
      Alert.alert(JSON.stringify(new_data))
    }
    
    )
    .catch(error => console.log('error', error));

    }


    HandlePress = () => {
      setClickbutton(clickbutton === 'Start record' ? 'Stop record' : 'Start record');
      if (clickbutton === 'Start record') {
        
        this.startRecording()
      }
      if(clickbutton === 'Stop record'){
        this.stopRecording()
      }
    };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Image source={{
          uri: 'https://wallpaperaccess.com/full/676550.jpg',
        }}  style={styles.decorationImage2} />

        <Image source={{
          uri: 'https://cdn.discordapp.com/attachments/1008653692653797418/1053326691856039936/image.png',
        }}  style={styles.decorationImage3} />


        <Text style={styles.Topic}>
        Recorded length: {Duration}s
        </Text>

        <Text style={styles.Reason}>
        👶🏻 Baby Cry Because 
        </Text>

        <Text style={styles.State}>
         {pasrsedata}
        </Text>
        

        <TouchableOpacity style={styles.button1} 
        activeOpacity={0.8} onPress= {HandlePress} >
          <Text style={styles.buttonTextStyle1}>{clickbutton}</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button2} 
        activeOpacity={0.8} onPress={this.Upload}  >
          <Text style={styles.buttonTextStyle2}>Predict Crying</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button3} 
        activeOpacity={0.8} onPress={this.PlayBack}  >
          <Text style={styles.buttonTextStyle2}>Playback</Text>
        </TouchableOpacity>
        
        
     

      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#4361EE'
    //padding: 80,
  },
  decorationImage1: {
    width: 10000,
    height: 10000,
    position: 'absolute',
  },
  decorationImage2: {
    width: 414,
    height: 1000,
    position: 'absolute',
    top:150,
    borderRadius: 65,
  },
  decorationImage3: {
    width: 150,
    height: 150,
    position: 'absolute',
    top:80,
    borderRadius: 100,
  },
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4361EE',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 64,
    width: 220,
    borderRadius: 20,
    marginTop: 400,
    //marginleft:20
  },
  buttonTextStyle1: {
    color: 'white',
    marginBottom: 4,
    marginLeft: 55,
    justifyContent: 'center',
    fontSize:20,
    fontWeight: 'bold'
  },
  button2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F72585',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 64,
    width: 220,
    borderRadius: 20,
    marginTop: 40,
  },
  button3: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F72585',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 64,
    width: 220,
    borderRadius: 20,
    marginTop: 40,
  },
buttonTextStyle2: {
    color: 'white',
    marginBottom: 4,
    marginLeft: 44,
    justifyContent: 'center',
    fontSize:20,
    fontWeight: 'bold'
  },
  Topic: {
    color: 'white',
    fontSize : 34,
    fontWeight: 'bold',
    position: 'absolute',
    margin:10,
    top: 10,  
  },
  Reason: {
    color: 'black',
    fontSize : 28,
    fontWeight: 'bold',
    position: 'absolute',
    top: 235,  
  },
  State: {
    color: 'black',
    fontSize : 38,
    fontWeight: 'bold',
    position: 'absolute',
    top: 300,  
  },
});
