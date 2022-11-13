import React, {useCallback, useState} from 'react';
import {Button, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import mime from "mime";
const App = () => {
  Test = async () => {
    console.log("Test func");
  }

  Hello = async () => {
    let requestOptions = await {
      method: 'GET',
    };
    
    fetch("http://192.168.1.2", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }
  

  PickDocument = async () => {
    let SoundFile = await DocumentPicker.getDocumentAsync({});
    //alert(SoundFile.uri)
    console.log(SoundFile);
    // console.log(SoundFile.uri);
    }

  Upload = async () => {
    let SoundFile = await DocumentPicker.getDocumentAsync({});
    console.log(SoundFile);
    console.log(SoundFile.uri);

    const SoundFileUri = await "file:/" + SoundFile.uri.split("file:///").join("");
    var formdata = await new FormData();

    // formdata.append('uri',SoundFile.uri);
    //formdata.append("sound", SoundFile.uri);
    
    // formdata.append(  'uri',SoundFile.uri);
    formdata.append('image', {

      uri : SoundFileUri ,
 
      type: mime.getType(SoundFileUri ),
 
      name: SoundFileUri.split("/").pop()
 
     });
    console.log(formdata);

    // var requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow'
    // };


    await fetch(`http://192.168.1.2/infantcry`, {

        method:'POST',

        Accept: 'application/json',

        'Content-Type': 'multipart/form-data',

        body: formdata

    }).then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    }



  return (
    <SafeAreaView style={styles.container}>
      <Button title="Test" onPress={this.Test}/>
      <Button title="Hello" onPress={this.Hello}/>
      <Button title="Select Document" onPress={this.PickDocument}/>
      <Button title="Upload" onPress={this.Upload}/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});