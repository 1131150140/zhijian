//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
let url = 'http://p2016.class01.com/UploadFile/Picture/NewsAnswer/Big/_1_/2016/11/9/9/11373774813867.jpg';
class Lmage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    React Ntive 图片 resizemode属性
                </Text>
                <Image style={[styles.imageStyle,{resizeMode: 'cover'}]} source={{uri: url}}>
                </Image>
                <Image style={[styles.imageStyle,{resizeMode: 'contain'}]} source={{uri: url}}>
                </Image>
                <Image style={[styles.imageStyle,{resizeMode: 'stretch'}]} source={{uri: url}}>
                </Image>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        color: 'red',
        height: 30
    },
    imageStyle: {
        width: 100,
        height: 100,
        marginTop: 10,
    }
});

//make this component available to the app
export default Lmage;
