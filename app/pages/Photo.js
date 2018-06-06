//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CameraButton from './CameraButton'
// create a component
class Photo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            available: null
        }
    }

    onFileUpload = (file, fileName)=> {
        
        this.setState({
            available: file
        })  
        alert(this.state.available)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: 'http://p2016.class01.com/UploadFile/Picture/NewsAnswer/Big/_1_/2016/11/9/9/11373774813867.jpg'}} style={styles.imagestyle}/>
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
        backgroundColor: '#fff',
    },
    imagestyle: {
        width: 180,
        height:250,
        marginTop: 30,
        alignSelf: 'center',
    }
});

//make this component available to the app
export default Photo;
