import React, { Component } from 'react';
import { View, Text,  StyleSheet,TextInput, PixelRatio, TouchableOpacity   } from 'react-native';
import {rem} from '../../utils/util'
import Index from './Index'
import {getNavigator} from '../../route';
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
  }
  onPressLearnMore() {
    getNavigator().push({
        name: 'Index'
    });
  }
  

  render() {
    return (
      <View style={styles.widhd}>
        <View style={styles.header}>
            <Text style={styles.wenzi} >登录</Text>
        </View>
        <View style={styles.inputs}>
            <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor = "#e6e6e6"
            placeholder="请输入手机号"
            style={styles.password}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
        />
        </View>
        <View style={styles.inputs1}>
            <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor = "#e6e6e6"
            placeholder="请输入密码"
            style={styles.password}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
        />
        </View>
        <View style={styles.juz}>
       
            <View style={styles.btn}>
            <TouchableOpacity onPress={this.onPressLearnMore.bind(this)}>
                <Text style={styles.btnText}>
                    登录
                </Text>
                </TouchableOpacity>    
            </View>
       
       
        </View>
        
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
   widhd: {
        flex: 1,
        backgroundColor: '#6EA6FF',
        alignItems: 'center'
   },
   header: {
       height: rem(256),
       width: rem(750)
   },
   wenzi: {
       fontSize: rem(48),
       color: '#fff',
       lineHeight:rem(280),
       textAlign:'center'
   },
   inputs: {
       height: rem(110),
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       borderBottomColor: '#e6e6e6',
       borderBottomWidth: 1/PixelRatio.get(),
       width:rem(630)
   },
   inputs1: {
    height: rem(110),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1/PixelRatio.get(),
    width:rem(630),
    overflow: 'hidden',
    },
    juz: {
        marginTop:rem(130)
    },
   password: {
    width:rem(630),
    height:rem(68),
    borderWidth: 0,
    padding: 0,
    fontSize:rem(28),
    color: '#fff',
    marginTop: rem(36),
    },
    btn: {
        width:rem(630),
        height:rem(80),
        backgroundColor: '#fff',
        borderRadius:rem(40),
        display: 'flex',
        justifyContent: 'center',
        padding:0
    },
    btnText: {
        textAlign: 'center',
        fontSize: rem(28),
        color: '#0189FF',
    }

});