//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    Animated,
  } from 'react-native';

// create a component
class FadeInView1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
          };
    }
    componentWillMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
            }
        ).start();
    }
    render() {
        return (
            <Animated.View                            // 可动画化的视图组件
            style={{
              ...this.props.style,
              opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
            }}
          >
            {this.props.children}
          </Animated.View>
        );
    }
}
export default class FadeInView extends Component{
    render() {
        return (
            <FadeInView1 style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
              <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>淡入</Text>
            </FadeInView1>
          )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

