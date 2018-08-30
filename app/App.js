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
  StatusBar,
  Dimensions,
  BackHandler,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import {getRouteMap, registerNavigator} from './route';
const {width, height} = Dimensions.get('window');
import Toast from './utils/toast';


let lastClickTime = 0;


export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.onBackAndroid = this.onBackAndroid.bind(this);
  }
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
   //出场动画
   configureScene(route) {
    let sceneAnimation = getRouteMap().get(route.name).sceneAnimation;
    if (sceneAnimation) {
      return sceneAnimation;
    }
    //默认
    return Navigator.SceneConfigs.PushFromRight
  }
  renderScene(route, navigator) {
    this.navigator = navigator;
    registerNavigator(navigator);
    //Each component name should start with an uppercase letter
    //jsx中的组件都得是大写字母开头, 否则将报错, expected a component class, got [object Object]
    let Component = getRouteMap().get(route.name).component;
    if (!Component) {
      return (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>您所启动的Component未在routeMap中注册</Text>
        </View>
      );
    }
    return (
      <Component {...route}/>
    );
  }

 

  render() {
  
    return (
      <View style={{width,height}}>
       <StatusBar
                    barStyle='default'
                    backgroundColor='#6EA6FF'
                />
          <Navigator
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            name: 'Index',//index
          }}/>
      </View>
    );
  }
 
  onBackAndroid() {
    const routers = this.navigator.getCurrentRoutes();
    if (routers.length > 1) {
      this.navigator.pop();
      return true;
    }
    let now = new Date().getTime();
    if (now - lastClickTime < 2500) {//2.5秒内点击后退键两次推出应用程序
      return false;//控制权交给原生
    }
    lastClickTime = now;
    Toast.show('再按一次退出一个');
    return true;
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderColor: 'red',
    borderWidth: 1,
    width:750,
  },
  

  
});
