//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
var screenWidth = Dimensions.get('window').width;
// create a component
class MyClass extends Component {
    constructor(props) {
        super(props)
    }
    _onPressIn() {
        alert('press in')
    }
    _onPressOut() {
        alert('press out')
    }
    _onPress() {
        alert('press')
    }
   
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                style={styles.touchable}
                onPressIn={this._onPressIn}
                onPressOut={this._onPressOut}
                onPress = {this._onPress}
            
                >
                    <Text>123123</Text>
                </TouchableHighlight>
            </View>
        );
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
    touchable: {
        flex:1,
        width: screenWidth,
        backgroundColor: 'red'
    }
});

//make this component available to the app
export default MyClass;
