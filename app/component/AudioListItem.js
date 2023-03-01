//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Dimensions} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import color from '../misc/color';
// create a component
const getThumbnailText = filename =>  filename[0];

const AudioListItem = ({title,duration,onOptionPress}) => {
    return (
        <>
            <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style= {styles.thumbnail}>
                    <Text  style={styles.thumbnailText}>{getThumbnailText(title)}</Text>
                </View>
                <View style= {styles.titleContainer}>
                    <Text  numberOfLines={1} style={styles.title}>{title}</Text>
                    <Text  style={styles.timeText}>{duration} </Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
            <Entypo 
            onPress={onOptionPress}
            name="dots-three-vertical" size={24} color={color.FONT_MEDIUM} />
            </View>
        </View>
        <View style = {styles.seperate}/>
        </>
       
    );
};

// define your styles
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: width - 80,
     
      
    },
    leftContainer : {
        flexDirection: 'row',
        alignItems : 'center',
        flex: 1 ,
    },
    rightContainer : {
        flexBasis : 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
   
    },
    thumbnail:{
        height: 50,
        flexBasis: 50,
        backgroundColor : color.FONT_LIGHT,
        justifyContennt : 'center',
        alignItems : 'center',
        borderRadius : 25
    },
    thumbnailText: {
        fontSize:22,
        fontWeight: 'bold',
        color : color.FONT,
    },
    titleContainer : {
        width : width - 180,
        paddingLeft: 10,

    },
    title : {
        fontSize: 16,
        color : color.FONT,
    },
    seperate : {
        width : width - 80,
        backgroundColor : '#333',
        opacity: 0.3,
        height : 0.5,
        alignSelf : 'center',
        marginTop : 10,
    },
    timeText : {
        fontSize:  14,
        color: color.FONT_LIGHT
    }

});

//make this component available to the app
export default AudioListItem;
