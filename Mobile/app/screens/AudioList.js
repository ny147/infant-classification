//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AudioContext } from '../context/AudioProvider';
import { RecyclerListView, LayoutProvider } from 'recyclerlistview';
import { Dimensions } from 'react-native';
import AudioListItem from '../component/AudioListItem';
import Screen from '../component/screen';
// create a component
export class AudioList extends Component {
    static contextType = AudioContext
    layoutProvider = new LayoutProvider((i) => 'audio', (type, dim) => {
        switch(type){
            case 'audio' :
                dim.width = Dimensions.get('window').width;
                dim.height = 70;
                break;
                default:
                    dim.width = 0;
                    dim.height = 0;

        }
       
    })

    rowRenderer = (type, item) => {
        // console.log(item)
        return <AudioListItem title={item.filename}  duration={item.duration} 
        onOptionPress = {() => {
            console.log("test 1")
        }}
        />
    }

    render() {
        return (
            <AudioContext.Consumer>
                {({ dataProvider }) => {
                    return (
                        <Screen>
                             <RecyclerListView dataProvider={dataProvider} layoutProvider={this.layoutProvider} rowRenderer={this.rowRenderer} />
                        </Screen>
                    )
                
                }}
            </AudioContext.Consumer>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

//make this component available to the app
export default AudioList;
