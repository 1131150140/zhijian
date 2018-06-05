//import liraries
import React, { Component } from 'react';
import { View,
     Text,
     StyleSheet,
     Image,
     TextInput, 
     Dimensions, 
     PixelRatio, 
     TouchableHighlight 
    } from 'react-native';
var screenWidth = Dimensions.get('window').width;
let url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528010003134&di=1580847181b7d2dc2d93a8c53bcb69d0&imgtype=0&src=http%3A%2F%2Fwww.biaobaiju.com%2Fuploads%2F20180122%2F12%2F1516596969-GqtnjVeXNc.jpg';
// create a component
class MyClass extends Component {
    dianji() {
        alert('点击了')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.juzhong}>
                    <Image style={[styles.imgs, {resizeMode: 'cover'}]} source={{uri: url}}/>
                <View>
                    <TextInput maxLength={4}   underlineColorAndroid='transparent' style={styles.shang} placeholder="请输入QQ号/手机号/邮箱"></TextInput>
                    <TextInput maxLength={4}  underlineColorAndroid='transparent' style={styles.xia} placeholder="请输入密码"></TextInput>
                </View>
                <TouchableHighlight onPress={this.dianji.bind(this)}>
                <View  style={styles.btn}>
                    <Text style={styles.font}>登陆</Text> 
                </View>
                </TouchableHighlight>
                </View>
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
    imgs: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    shang: {
        marginTop: 14,
        width: screenWidth - 60,
        height:40,
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1/PixelRatio.get(),
        fontSize: 14,
    },
    xia: {
        width: screenWidth - 60,
        height:40,
        fontSize: 14,
    },
    juzhong: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: screenWidth - 60,
        height:30,
        borderRadius:6,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    font: {
        color: '#fff'
    }
});

//make this component available to the app
export default MyClass;
