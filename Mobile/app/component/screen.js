//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import color from '../misc/color';
// create a component
const Screen = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       flex:1,
       backgroundColor: color.APP_BG,
       paddingTop: StatusBar.currentHeight
    },
});

//make this component available to the app
export default Screen;
