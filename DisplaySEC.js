import React, { useState, useRef, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as Audio from 'expo-av/build/Audio';

const RecordAudio = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordDuration, setRecordDuration] = useState(0);
  const sound = useRef(new Audio.Sound());

  useEffect(() => {//Here
    let intervalId;
    if (isRecording) {
      intervalId = setInterval(async () => {
        const { durationMillis } = await sound.current.getStatusAsync();
        setRecordDuration(durationMillis / 1000);
      }, 100);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRecording]);

  const startRecording = async () => {
    const audioPermission = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (audioPermission.status !== 'granted') {
      console.error('Permission to record audio was denied');
      return;
    }

    const recording = new Audio.Recording();
    try {
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      setIsRecording(true);
      await recording.startAsync();
      sound.current = recording;
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    setIsRecording(false);
    try {
      const { sound: recordingSound, status } = await sound.current.getStatusAsync();
      if (status === 'running') {
        await recordingSound.stopAndUnloadAsync();
      }
    } catch (error) {
      console.error(error);
    }

    const { uri } = await sound.current.getURI();
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log(asset);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isRecording ? (
        <>
          <Button title="Stop Recording" onPress={stopRecording} />
          <Text>Recorded length: {recordDuration}s</Text>
        </>
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </View>
  );
};

export default RecordAudio;
