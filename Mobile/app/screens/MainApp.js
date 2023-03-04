import React from 'react';
import {View, Text,StyleSheet,SafeAreaView,Image,TouchableOpacity,} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Graph from '../component/Graph';
const MainApp = () =>{
    const data = [
        {
            value: 50,
            label: 'One',
        },
        {
            value: 10,
            label: 'Two',
        },
        {
            value: 40,
            label: 'Three',
        },
        {
            value: 95,
            label: 'Four',
        },
        {
            value: 85,
            label: 'Five',
        },
    ]
    return (
        <LinearGradient
        colors={['#9DCEFF', '#92A3FD']}
        style={styles.container}>

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1080487153613676614/f50524ee5f161f437400aaf215c9e12f.png',

            }}  style={{width: 414,height: 1000,position: 'absolute',top:260,borderRadius: 65,}} />


            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1080494143865884802/9ef28c.png',

            }}  style={{width: 90,height: 90,position: 'absolute',top:220,left:160,borderRadius: 65,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1080494658414706829/c58bf2.png',

            }}  style={{width: 60,height: 60,position: 'absolute',top:260,left:260,borderRadius: 65,}} />
        

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1080487153613676614/f50524ee5f161f437400aaf215c9e12f.png',
            
            }}  style={{width: 350,height: 100,position: 'absolute',top:70,left:30,borderRadius: 20,}} />

            {/* <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1080487492735737926/92a3fd.png',
            
            }}  style={{width: 350,height: 100,position: 'absolute',top:320,left:30,borderRadius: 20,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1080487671400509501/9dceff.png',
            
            }}  style={{width: 350,height: 100,position: 'absolute',top:450,left:30,borderRadius: 20,}} /> */}

            <Text style={styles.Topic}>
                Main App(Header)
            </Text>
            {/* <Graph ></Graph> */}
            <Graph data = {data}  />
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
        marginTop: 350,
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

