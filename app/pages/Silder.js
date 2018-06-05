//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
var {width, height} = Dimensions.get('window');

// create a component
class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {currentPage: 0}
    }
    
   
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.zhongceng}>
                <Swiper style={styles.wrapper} height={200}   autoplay autoplayTimeout={3}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
                </View>
               
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        marginTop: 20,
        width: width,
        height:height
    },
    zhongceng: {
        height: 200
    },
    slide1: {
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    wrapper: {
        height:200,
    },

});

//make this component available to the app
export default Slider;
