import React from 'react';
import {View, Text,StyleSheet,SafeAreaView,Image,TouchableOpacity,} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const MainApp = () =>{
    return (
        <LinearGradient
        colors={['#9DCEFF', '#92A3FD']}
        style={styles.container}>

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',

            }}  style={{width: 414,height: 1000,position: 'absolute',top:260,borderRadius: 65,}} />


            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100289337208963/LightGreen.png',

            }}  style={{width: 90,height: 90,position: 'absolute',top:220,left:160,borderRadius: 65,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100284392128543/LightPurple.png',

            }}  style={{width: 60,height: 60,position: 'absolute',top:260,left:260,borderRadius: 65,}} />
        

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',
            
            }}  style={{width: 350,height: 100,position: 'absolute',top:70,left:30,borderRadius: 20,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100266788630579/Blue.png',
            
            }}  style={{width: 350,height: 100,position: 'absolute',top:320,left:30,borderRadius: 20,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100274229330022/LightBlue.png',
            
            }}  style={{width: 350,height: 100,position: 'absolute',top:450,left:30,borderRadius: 20,}} />

            <Text style={styles.Topic}>
                Main App(Header)
            </Text>

            <TouchableOpacity style={styles.button2} 
            activeOpacity={0.8} onPress={this.Upload}  >
                <Text style={styles.buttonTextStyle2}>O Analyse emotion</Text>
            </TouchableOpacity>


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
      },button2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#92A3FD',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 50,
        width: 270,
        borderRadius: 20,
        marginTop: 570,
        marginLeft: 80,
      },
    buttonTextStyle2: {
        color: 'white',
        marginBottom: 4,
        marginLeft: 44,
        justifyContent: 'center',
        fontSize:20,
        fontWeight: 'bold'
      },
})

export default MainApp;

