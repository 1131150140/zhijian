import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BaseComponent from '../../base/baseComponent';

export default class componentName extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  getNavigationBarProps() {
    return {
      leftButtonImage: require('../../images/search_min.png'),
      rightButtonImage: require('../../images/individual_center.png'),
      title: '电影',
    }
  }
  onLeftPressed() {
    alert('left')
  }
  onRightPressed() {
    alert('right')
  }
  renderBody() {
    return (
      <View style={styles.container}>
        <Text >123123</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }  
});