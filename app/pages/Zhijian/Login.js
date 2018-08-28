import React, { Component } from 'react';
import { View, Text,  StyleSheet,TextInput, PixelRatio, TouchableOpacity   } from 'react-native';
import {pTd} from '../../utils/util'
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
  }
  onPressLearnMore() {

  }

  render() {
    return (
      <View style={styles.widhd}>
        <View style={styles.header}>
            <Text style={styles.wenzi}>登录</Text>
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
        <TouchableOpacity
            onPress={()=> {
                this.onPressLearnMore
            }}
        >
            <View style={styles.btn}>
                <Text style={styles.btnText}>
                    登录
                </Text>
            </View>
        </TouchableOpacity>
       
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
       height: pTd(256),
       width: pTd(750)
   },
   wenzi: {
       fontSize: pTd(48),
       color: '#fff',
       lineHeight:pTd(280),
       textAlign:'center'
   },
   inputs: {
       height: pTd(110),
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       borderBottomColor: '#e6e6e6',
       borderBottomWidth: 1/PixelRatio.get(),
       width:pTd(630)
   },
   inputs1: {
    height: pTd(110),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1/PixelRatio.get(),
    width:pTd(630),
    overflow: 'hidden',
    },
    juz: {
        marginTop:pTd(130)
    },
   password: {
    width:pTd(630),
    height:pTd(68),
    borderWidth: 0,
    padding: 0,
    fontSize:pTd(28),
    color: '#fff',
    marginTop: pTd(36),
    },
    btn: {
        width:pTd(630),
        height:pTd(80),
        backgroundColor: '#fff',
        borderRadius:pTd(40),
        display: 'flex',
        justifyContent: 'center',
        padding:0
    },
    btnText: {
        textAlign: 'center',
        fontSize: pTd(28),
        color: '#0189FF',
    }

});