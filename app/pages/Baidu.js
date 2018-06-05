import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View,
    WebView
} from 'react-native';

 
//获取设备的宽度和高度
var {height,width} = Dimensions.get('window');
 
//默认应用的容器组件
export default class Baidu extends Component {
    //渲染
    render() {
        return (
            <View style={styles.container}>
              <WebView bounces={false}
                scalesPageToFit={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                scalesPageToFit={false}
                source={{uri:"http://www.baidu.com"}}
                style={styles.webview}>
              </WebView>
            </View>
        );
    }
}
 
//样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
    },
    webview: {
        width: width,
        height: height
    }
});