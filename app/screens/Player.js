import React from 'react';
import {View,Text, StyleSheet} from  'react-native'

const Player = () =>{
    return (
        <View style={styles.container}>
            <Text>Main App</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{ 
        flex:1,
        justifyContent : 'center',
        alignItems: 'center'

    }
})

export default Player;

