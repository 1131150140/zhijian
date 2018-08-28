

import React, { Component } from 'react';


import App from './App';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    Image,
    TextInput,
    StatusBar,
  } from 'react-native';
export default class Root extends Component {
    render() {
        return (
            <View>
               <App />
            </View>
         
        )
    }
}