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
import MyText from '../component/MyText';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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



const MainApp = ({ navigation }) =>{
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
    // const  DurationSound = new Audio.Recording()
    const DurationSound = useRef(new Audio.Recording());

    const [wavfile,setwavfile] = React.useState();

    const colorStylees ={
      backgroundColor:BGcolor,
    }
  //   Dummy = async () => {
  //     console.log('Hi hi...');
  //     navigation.navigate('Infantcry');
  //     console.log('Hi hi2...');
  // }
   
   
    
    DustanPage = async () => {
      navigation.navigate('Info');
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
      const emotionhandle = (reason) =>{
        let handleMethod = ''
        switch(reason.toLowerCase()){
          case 'hungry':
            handleMethod = 'feeding breast milk or formula to him/her'
            break;
          case 'tired':
            handleMethod = 'take him/her to sleep'
            break;
          case 'burping':
            handleMethod = 'hold them \nupright and gently pat or rub their back'
            break;
          case 'discomfort':
            handleMethod = 'Check him/her diaper and change it.'
            break;
          case 'poop':
            handleMethod = 'change their diaper promptly.'
            break;
            
        }
        return handleMethod;
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
          const BabyReason = `Babycry Because ${data.Reason} ${emotionhandle(data.Reason)}`
          
          setReason(BabyReason)
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
            
            }}  
            // style={{width: 50,height: 50,position: 'absolute',top:42,left:"80%",borderRadius: 20,}} />
            style={{width: '14%',height: '7%',position: 'absolute',top:'6.8%',left:"80%",borderRadius: 20,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',

            }}  
            // style={{width: "100%",height: 1000,position: 'absolute',top:220,borderRadius: 65,}} />
            style={{width: "100%",height: '100%',position: 'absolute',top:'36%',borderRadius: 65,}} />

            {/* <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100284392128543/LightPurple.png',

            }}  style={{width: 60,height: 60,position: 'absolute',top:260,left:260,borderRadius: 65,}} />  */}
        

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',
            
            }}  
            
            // style={{width: "90%",height: 100,position: 'absolute',top:80,margin:"5%",borderRadius: 20,}} />
            style={{width: "90%",height: '12.2%',position: 'absolute',top:'12%',margin:"5%",borderRadius: 20,}} />
            


            {!showGraph && (
              <Image source = {{
                // uri : 'https://user-images.githubusercontent.com/60291649/224925305-407df73b-4520-409a-9f94-077dee674168.png'
                uri : 'https://media.discordapp.net/attachments/1080379783323582464/1090664431081504890/Dustan_labguage_7.png'
                }}  
                style={{ width: "100%",height: '20%',position: 'absolute',top:'53%' }}
                // style={{width: "90%",height: '14%',position: 'absolute',top:'54%',left:'5%',borderRadius: 20}}
                />
              )}

          {!showGraph && (
              < Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1082652961261498418/about_us.png',
            }} style={{width: "87%",height: '15%',position: 'absolute',top:'70%',marginLeft:"6%",borderRadius: 20,}} />
           )}
            

            

            
            {/* <Text style={styles.Topic}>
            Header
            </Text> */}
            {/* <Text style={{top:'18%',left:'25%',color: 'black',fontSize:16,paddingTop:"1%"}}>
            Let’s Record your baby sound and{'\n'}analyse emotion  
            </Text> */}

              {/* <Text style={{top:'48%',left:'12%',color: 'white',fontSize:14,}}>
            What is Dustan baby language ?{'\n'}learn about your baby  
            </Text> */}
            <MyText title={'Record'} style={styles.Topic} type="bold"/>

            {!showGraph && (
              <MyText title={"Let’s Record your baby sound \n and analyse emotion"} 
              style={{top:'16%',left:'18%',color: 'black',fontSize:16,paddingTop:"1%"}} type="regular"/>
            )}

      
            {showGraph && (
              <MyText title={Reason} 
              style={{top:'18%',left:'25%',color: 'black',fontSize:12,paddingTop:"1%"}} type="regular"/>
            )}

            <MyText title={'What is Dustan baby language ?\nlearn about your baby '} 
            style={{top:'48%',left:'12%',color: 'white',fontSize:14,}} type='regular'/>
            

           {!showGraph && (
            //  <Text style={{top:'64%',left:'15%',color: 'black',fontSize:16,}}>
            //  Who are we ? get know
            //  </Text>
            <MyText title={' Who are we ?\n get know about us' } 
            style={{top:'60%',left:'15%',color: 'black',fontSize:16,}} type='thin'/>
            )}

            {/* <Text style={{top:380,left:110,color: '#92A3FD' ,fontSize:16,}}>
            about us   
            </Text> */}
            
            

            <TouchableOpacity onPress={this.selectDocuments} style={styles.buttonFolder}>
                <Icon name="folder-multiple" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress} style={[styles.buttonMicrophone,colorStylees]}>
                <Icon name={iconName} size={50} color="white" />
            </TouchableOpacity>

            <View style={{flex:1,flexDirection:"row",top:"37%",marginLeft:"10%",position:'absolute'}}>
            <TouchableOpacity onPress={this.PlayBack} style={styles.buttonSkip} >
                <Icon name="skip-next" size={50} color="white" />
            </TouchableOpacity>
            {/* <Text style={{flex:4,paddingTop:"10%",marginLeft:"10%",marginTop:"5%",padding:"5%"}}>Recorded length: {Duration}s</Text> */}
            <MyText title={`Recorded length: ${Duration}s`} style={{flex:4,paddingTop:"10%",marginLeft:"20%",marginTop:"5%",padding:"5%"}} type='semibold'/>
            </View>

            



            {!showGraph && (
              <TouchableOpacity style={styles.button1} 
              activeOpacity={0.8} onPress={this.DustanPage}  >
                  {/* <Text style={styles.buttonTextStyle1}>View More</Text> */}
                  <MyText title={'View more'} style={styles.buttonTextStyle1} type='semibold'/>
              </TouchableOpacity>
          )}

              
              {!showGraph && (
                <TouchableOpacity style={styles.button2} 
              activeOpacity={0.8} onPress={this.Dummy}  >
                  {/* <Text style={styles.buttonTextStyle2}>Learn more</Text> */}
                  <MyText title={'Learn more'} style={styles.buttonTextStyle2} type='semibold'/>
              </TouchableOpacity>
              )}
               
            <TouchableOpacity style={styles.button3} 
            activeOpacity={0.8} onPress={this.Upload}  >
              <AntDesign  name="dashboard" size={24} color="white" />
              {/* <Text style={styles.buttonTextStyle3}>Analyse emotion</Text>
               */}
               <MyText title={'Analyse emotion'} style={styles.buttonTextStyle3} type='bold'/>
            </TouchableOpacity>
            
            {showGraph && (
            
            <Graph data = {Tdata}/>
            // <Image source = {{
            //   uri : 'https://user-images.githubusercontent.com/60291649/224925305-407df73b-4520-409a-9f94-077dee674168.png'
            //   }}  style={{ width: "100%",height: '14%',position: 'absolute',top:'54%' }} />
         
             )}

            {Loading && !showGraph && (
              <View style={{justifyContent: 'center'}}>
                <ActivityIndicator size="large" color="#00ff00" style={{top:'80%' ,marginTop:'100%', position: 'absolute',justifyContent: 'center',
                marginLeft:'35%'}}/>
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
      position: 'absolute',
      margin:10,
      top: '5%',
      left:'33%',  
    },
    button1: {
      position:'absolute',
      backgroundColor: '#C58BF2',
      height: '5%',
      width: '23%',
      borderRadius: 20,
      top: '62%',
      left: '15%',
    },
  buttonTextStyle1: {
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize:12,
      marginLeft:'5%',
      marginTop:'6%',
      paddingLeft:'5%'
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
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop:'10%',
      fontSize:12,
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
      top: "78%",
      margin : "18%",
      
    },
  buttonTextStyle3: {
      color: 'white',
      margin:"2%",
      marginLeft:"4%",
      justifyContent: 'center',
      fontSize:20,
     
    },
    image: {
      
      borderRadius:20,
      height:"40%",
      width:"100%"
    },
    buttonMicrophone: {
      top: "28%",
      left:"38%",
      alignItems:'center',
      justifyContent:'center',
      width:"25%",
      aspectRatio: 1/1,
      borderRadius: 40,
      position: 'absolute'
      // overflow: 'hidden',
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
      position: 'absolute',
      left:"5%",
      top:"12%",
      justifyContent:'center',
      alignItems:'center',
      width:"15%",
      aspectRatio:1/0.8,
      borderRadius: 30,
      marginTop:"5%",
      
      // overflow: 'hidden',
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
