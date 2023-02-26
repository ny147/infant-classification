//import liraries
import React, { Component ,createContext} from 'react';
import { View, Text, StyleSheet , Alert} from 'react-native';
import * as MediaLibrary from 'expo-media-library'
import { DataProvider } from 'recyclerlistview';
// {"canAskAgain": true, "expires": "never", "granted": false, "status": "undetermined"}


// create a component
export const AudioContext = createContext()
export class AudioProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            audioFiles : [],
            permissionError : false,
            dataProvider : new DataProvider((r1,r2) => r1 !== r2)
        }
    }
    
    getAudioFile = async () => {
        const {dataProvider,audioFiles} = this.state
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            
        });
        media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: media.totalCount,
            
        });
        this.setState({...this.state,dataProvider:dataProvider.cloneWithRows([
            ...audioFiles,...media.assets
        ]),audioFiles: [
            ...audioFiles,...media.assets
        ]})
       

    }

    permissionAlert = () =>{
        Alert.alert("permission require","this app need permisssion",[{
            text : 'I am ready',
            onPress : () => this.getPermission()
        },{
            text : 'cancle',
            onPress: () => this.permissionAlert()
        }
    
    ])

    }
  

    
    getPermission = async () => {
       const permission =  await MediaLibrary.getPermissionsAsync()
    //    console.log(Permission) 
        if(permission.granted){
                // get audio file
                this.getAudioFile()
        } 

        if(!permission.granted && permission.canAskAgain){
            const {canAskAgain,expires,granted,status} = await MediaLibrary.requestPermissionsAsync();
            if(status === 'denied' && canAskAgain){
                // Display alert that user must allow thisto work this app
                this.permissionAlert();
            }
            if(status=== 'granted'){
                // get audio file
                this.getAudioFile()()
            }
            if(status === 'denied' && !canAskAgain){
                //display error to user 
                this.setState({...this.state,permissionError: true})
            }
        }
    }
    
    componentDidMount(){
        this.getPermission()
    }
    render() {
        const {audioFiles,dataProvider,permissionError} = this.state;
        // console.log(dataProvider)
        if(permissionError) return <View style={styles.container}>
            <Text>it look like you don't let permission two our app</Text>
        </View>
        return  <AudioContext.Provider value = {{audioFiles  ,dataProvider}}>
                {this.props.children}
                </AudioContext.Provider>
    }
}

//make this component available to the app
const styles = StyleSheet.create({
    container:{ 
        flex:1,
        justifyContent : 'center',
        alignItems: 'center'

    }
})
export default AudioProvider