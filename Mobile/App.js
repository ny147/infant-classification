import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import { AudioProvider } from './app/context/AudioProvider';
import AudioListItem from './app/component/AudioListItem';
import Graph from './app/component/Graph';
export default function App() {
  return (
   <AudioProvider>
     <NavigationContainer>
     < AppNavigator />
    </NavigationContainer>
   </AudioProvider>
 
    
  
   )
  };