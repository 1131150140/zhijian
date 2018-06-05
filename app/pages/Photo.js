//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CameraButton from './CameraButton'
// create a component
class Photo extends Component {

    onFileUpload(file, fileName){
        alert(file);    
    }

    render() {
        return (
            <View style={styles.container}>
                <CameraButton style={styles.cameraBtn}
                                  photos={[]}
                                  onFileUpload={this.onFileUpload} />
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
});

//make this component available to the app
export default Photo;
