import React, { useEffect,useState } from "react"
import {View,Text,StyleSheet} from 'react-native'
import * as Font from 'expo-font';
let customFonts = {
    'Poppins-Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Medium' : require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular' : require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold' : require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold' : require('../../assets/fonts/Poppins-Bold.ttf'),
  };


const MyText = ({title,style,type}) => {
    const [fontsLoaded,setfontsLoaded] = useState(false)
    let font;
    loadFontsAsync =  async () => {
    await Font.loadAsync(customFonts);
    setfontsLoaded(true)
    }
    loadFontsAsync();
    // useEffect( () =>{
    //     this.loadFontsAsync()
    // })
    
    if(!fontsLoaded) return null


    
    switch(type.toLowerCase()){
        case  "thin":
            font  = {fontFamily:'Poppins-Thin'}
            break;
        case "medium":
            font = {fontFamily:'Poppins-Medium'}
            break;
        case "regular":
            font = {fontFamily:'Poppins-Regular'}
            break;
        case "semibold":
            font = {fontFamily:'Poppins-SemiBold'}
            break;
        case "bold":
            font = {fontFamily:'Poppins-Bold'}
            break;
        default:
            font  = {fontFamily:'Poppins-Regular'}

    }
    return (<Text style={[font , style]}>{title}</Text>)
}

// const styles = StyleSheet.create({
//     text : {
//         fontFamily:'Poppins-Thin',
//     }
// })

export default MyText;