/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Image,
  TextInput,
  StatusBar,
  Dimensions,
  BackHandler,
  ListView
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components" 
import Splash from './pages/Splash';
const {width, height} = Dimensions.get('window');


export default class App extends Component {
  

 

  render() {
  
    return (
      <View style={{width,height}}>
       <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    translucent={true}
                />
          <Navigator
                    initialRoute={{name: 'Splash', component: Splash}}
                    configureScene = {(route) => {
                      return Navigator.SceneConfigs.FadeAndroid
                    }}
                  renderScene={(route, navigator) => {
                      let Component = route.component;
                      if (route.component) {
                        return <Component navigator = {navigator} />
                      }
                     
                      
                  }}
                 
                />
               
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:80,
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#ff0067',
    padding: 2
  },
  flex1: {
    flex: 1,
    backgroundColor : "#3399cc"
  }
 

  
});
