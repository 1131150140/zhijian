import React, { Component } from 'react';
import { View, Text, PixelRatio, StyleSheet } from 'react-native';
import {pTd} from '../../utils/util'
export default class componentName extends Component {
    static defaultProps = {
        bgColor: '#6EA6FF',
        unlikedText: '点赞'
      }
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <View style={[styles.nav,{backgroundColor: this.state.bgColor}]}>
          <Text>123123</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    nav: {
        width: pTd(750),
        height: pTd(130),
        borderColor: 'red',
        borderWidth: 1/PixelRatio.get(),
    }
  });
