import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navgin from './Navgin'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Navgin />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  }  
});