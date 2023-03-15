import React from 'react';
import {View, Text,StyleSheet,SafeAreaView,Image,TouchableOpacity,ImageBackground} from  'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MainApp = () =>{
    const [iconName, setIconName] = React.useState('microphone');
    const [backgroundImage, setBackgroundImage] = React.useState({ uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100289337208963/LightGreen.png' });
    const [isHomeImage, setIsHomeImage] = React.useState(false);
    const [showImages, setShowImages] = React.useState(false);

    Showgraph = async () => {
      setShowImages(true);
      console.log('Show image');
    };

    Dummy = async () => {
        console.log('Hi hi...');
    }
    Dummy2 = async () => {
        console.log('Hi hi2...');
    }
    
    const handlePress = () => {
        setIconName(isHomeImage ? 'microphone' : 'stop');
        setBackgroundImage(isHomeImage ? { uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100289337208963/LightGreen.png' } : { uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1083247153918517268/red.png' });
      if (iconName === 'microphone') {
        this.Dummy();
      }
      if(iconName === 'stop'){
        this.Dummy2();
      }
      setIsHomeImage(!isHomeImage);
    };
    

    return (
        <LinearGradient
        colors={['#9DCEFF', '#92A3FD']}
        style={styles.container}>

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',
            
            }}  style={{width: 50,height: 50,position: 'absolute',top:42,left:350,borderRadius: 20,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',

            }}  style={{width: 414,height: 1000,position: 'absolute',top:260,borderRadius: 65,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100284392128543/LightPurple.png',

            }}  style={{width: 60,height: 60,position: 'absolute',top:260,left:260,borderRadius: 65,}} />
        

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100252003700786/white.png',
            
            }}  style={{width: 350,height: 100,position: 'absolute',top:110,left:30,borderRadius: 20,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1082652875135647845/Dustan_labguage_1.png',
            
            }}  style={{width: 380,height: 100,position: 'absolute',top:330,left:10,borderRadius: 0,}} />

            <Image source={{
                uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1082652961261498418/about_us.png',
            
            }}  style={{width: 350,height: 100,position: 'absolute',top:440,left:30,borderRadius: 20,}} />

            <Text style={styles.Topic}>
                Main App(Header)
            </Text>

            <Text style={{top:130,left:120,color: 'black',fontSize:16,}}>
            Let’s Record your baby sound and 
            </Text>
            <Text style={{top:130,left:120,color: 'black',fontSize:16,}}>
            analyse emotion  
            </Text>

            <Text style={{top:300,left:50,color: 'white',fontSize:14,}}>
            What is Dustan baby language ? 
            </Text>
            <Text style={{top:300,left:50,color: 'white',fontSize:14,}}>
            learn about your baby  
            </Text>
            

            <Text style={{top:380,left:60,color: 'black',fontSize:16,}}>
            Who are we ? get know
            </Text>
            <Text style={{top:380,left:110,color: 'blue',fontSize:16,}}>
            about us   
            </Text>
            
            <TouchableOpacity onPress={handlePress} style={styles.buttonMicrophone}>
                <ImageBackground source={backgroundImage} style={styles.image}>
                <Icon name={iconName} size={80} color="white" />
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.Dummy} style={styles.buttonFolder}>
                <Icon name="folder-multiple" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.Dummy} style={styles.buttonSkip}>
                <Icon name="skip-next" size={50} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} 
            activeOpacity={0.8} onPress={this.Dummy}  >
                <Text style={styles.buttonTextStyle1}>View More</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button2} 
            activeOpacity={0.8} onPress={this.Dummy}  >
                <Text style={styles.buttonTextStyle2}>Learn more</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button3} 
            activeOpacity={0.8} onPress={this.Showgraph}  >
                <Text style={styles.buttonTextStyle3}>O Analyse emotion</Text>
            </TouchableOpacity>
            
            {showImages && (
            <Image
              source={{ uri: 'https://cdn.discordapp.com/attachments/1080379783323582464/1081100299252531232/Pink.png' }}
              style={styles.GraphImage}
            />
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
        fontWeight: 'bold',
        position: 'absolute',
        margin:10,
        top: 20,
        left:100,  
      },
      button1: {
        position:'absolute',
        backgroundColor: '#C58BF2',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 35,
        width: 100,
        borderRadius: 20,
        marginTop: 390,
        marginLeft: 80,
      },
    buttonTextStyle1: {
        color: 'white',
        marginTop :5,
        marginLeft: 10,
        justifyContent: 'center',
        fontSize:16,
        fontWeight: 'bold'
      },
      button2: {
        position:'absolute',
        backgroundColor: '#92A3FD',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 35,
        width: 100,
        borderRadius: 20,
        marginTop: 480,
        marginLeft: 240,
      },
    buttonTextStyle2: {
        color: 'white',
        marginTop :5,
        marginLeft: 10,
        justifyContent: 'center',
        fontSize:16,
        fontWeight: 'bold'
      },
      button3: {
        position:'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#92A3FD',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 50,
        width: 270,
        borderRadius: 20,
        marginTop: 550,
        marginLeft: 80,
      },
    buttonTextStyle3: {
        color: 'white',
        marginBottom: 4,
        marginLeft: 44,
        justifyContent: 'center',
        fontSize:20,
        fontWeight: 'bold'
      },
      image: {
        alignItems: 'center',
      },
      buttonMicrophone: {
        marginTop: 100,
        marginLeft: 162,
        marginRight:162,
        borderRadius: 40,
        overflow: 'hidden',
      },
      buttonFolder: {
        position:'absolute',
        marginTop: 50,
        marginLeft: 360,
        overflow: 'hidden',
      },
      buttonSkip: {
        position:'absolute',
        marginTop: 263,
        marginLeft: 265,
        overflow: 'hidden',
      },
      GraphImage: {
        position: 'absolute',
        zIndex: 1,
        width: 500,
        height: 250,
        top:300,
        left:0,
        position: 'absolute',
      },
})

export default MainApp;

