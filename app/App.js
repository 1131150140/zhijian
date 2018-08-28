/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import initReactFastclick from 'react-fastclick';
initReactFastclick();
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
import AntdDemo from './pages/AntdDemo';
const {width, height} = Dimensions.get('window');
// import Resolution from "./utils/Resolution"
import Login from './pages/Zhijian/Login'
import Index from './pages/Zhijian/Index'
import Splash from './pages/Splash'



export default class App extends Component {
  

 

  render() {
  
    return (
      <View style={{width,height}}>
       <StatusBar
                    barStyle='light-content'
                    backgroundColor='#6EA6FF'
                    translucent={true}
                />
          <Navigator
                    initialRoute={{name: 'Splash', component: Index}}
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
    flex:1,
    borderColor: 'red',
    borderWidth: 1,
    width:750,
  }
 

  
});
