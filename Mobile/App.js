import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import * as DocumentPicker from 'expo-document-picker';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
// import RNFS from 'react-native-fs';
import mime from "mime";
var uri = ""
// var pasrsedata = ""
const App = () => {
  const [recording, setRecording] = React.useState();
  const [pasrsedata,setParsedata] = React.useState('');
  // const  [uri] = React.useState("");

  startRecording = async () => {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 

      
      console.log('Starting recording..');

      const RECORDING_OPTIONS_PRESET_HIGH_QUALITY = {
        android: {
          extension: '.m4a',
          outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
          audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
        ios: {
            extension: '.m4a',
            audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 128000,
            linearPCMBitDepth: 16,
            linearPCMIsBigEndian: false,
            linearPCMIsFloat: false,
        },
    };

      const recording = new Audio.Recording(RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      
    
    
      await recording.prepareToRecordAsync(RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync(); 
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  stopRecording = async () => {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    uri  =  recording.getURI(); 
    // uri = "hello"
    // const UT = recording.getURI(); 
    console.log('Recording stopped and stored at', uri);
  }

  // Mediasave = async () => {

  //   // try {
  //   //   FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'app_docs/', { intermediates: true });
  //   //   FileSystem.moveAsync(uri,FileSystem.documentDirectory + 'app_docs/' + 'test.wav')
  //   // }catch (err) {
  //   //   console.error('Failed to start recording', err);
  //   // }
  //   // console.log("read all file")
  //   // FileSystem.readDirectoryAsync(FileSystem.readAsStringAsync + 'app_docs/' + 'test.wav', { encoding: FileSystem.EncodingType.Base64 }).then(files => ()
     
  //   //   // console.log(files)
    
  //   // )

  // }


  Upload = async () => {
    
    let SoundFileUri = await "file:/" + uri.split("file:///").join("");
    var formdata = await new FormData();

 
    formdata.append('image', {

      uri : SoundFileUri ,
 
      type: mime.getType(SoundFileUri ),
 
      name: SoundFileUri.split("/").pop()
 
     });
    console.log(formdata);


    await fetch(`http://192.168.1.10:8080/infantcry`, {

        method:'POST',

        Accept: 'application/json',

        'Content-Type': 'multipart/form-data',

        body: formdata

    }
    ).then(response => response.text())
    .then(result => {
      console.log(result)
      // pasrsedata = JSON.parse(result)
      // setParsedata("String")
      // console.log(result)
      // console.log(pasrsedata)
      // console.log(result.Reason)
    }
    
    )
    .catch(error => console.log('error', error));

    }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      <Text>{uri}</Text>
       <Button style={styles.button} onPress={ this.Mediasave } title="Share"></Button>
       {/* <Button style={styles.button} onPress={ this.upload } title="upload"></Button> */}
       <Button title="upload to server" onPress={this.Upload}/>
       {/* <Text>{pasrsedata.Reason}</Text> */}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});