
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Info from '../screens/Info';
import MainApp from '../screens/MainApp';
import Result from '../screens/Result';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
      <Tab.Navigator
      
      >
        <Tab.Screen name = 'HOME' 
                    component={Home} 
                    options={{
                        tabBarIcon : ({color,size}) =>{
                    return <Entypo name="home" size={size} color={color}/>
                        },headerShown : false
    
            }}/>
        <Tab.Screen name = 'Infantcry' 
                    component={MainApp} 
                    options={{
                        tabBarIcon : ({color,size,focused}) =>{
                    return <MaterialIcons name="record-voice-over" size={size} color= {color}/>
                },headerShown : false
            }}
        />
        <Tab.Screen name = 'Info' 
                    component={Info}
                    options={{
                        tabBarIcon : ({color,size}) =>{
                    return <Ionicons name="analytics" size={size} color= {color} />
                },headerShown : false
            }}
        />
        {/* <Tab.Screen name = 'Result' 
                    component={Result}
                    options={{
                        tabBarIcon : ({color,size}) =>{
                    return <Foundation name="results" size={size} color= {color} />
                },headerShown : false
            }}
        /> */}
      </Tab.Navigator>
    );
};


//make this component available to the app
export default AppNavigator;
