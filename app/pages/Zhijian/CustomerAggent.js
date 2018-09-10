//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {getNavigator} from '../../route';
import BaseComponent from '../../base/baseComponent';
import { rem } from '../../utils/util';
import { resetGlobalState } from 'mobx/lib/core/globalstate';
// create a component
class MyClass extends BaseComponent {
    getNavigationBarProps() {
        return {
          title: '客户协议查询',
          leftButtonImage: require('../../images/return.png'),
        }
    }
    renderBody() {
        return (
            <View style={styles.container}>
                <View style={styles.confirm}>
                    <View style={styles.configrm}>
                        <Text style={styles.wenzi}>协议编号:</Text>
                        <View style={styles.rightView}>
                        <Text>3123</Text>
                        </View>
                    </View>
                    <View style={styles.configrm}>

                    </View>
                    <View style={styles.configrm}>

                    </View>

                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    confirm: {
        height: rem(280),
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#6EA6FF'
    },
    configrm: {
        width: rem(720),
        height: rem(55),
        borderWidth:1,
        borderColor: 'red',
        display: 'flex',
        flexDirection: 'row',

    },
    wenzi: {
        width: rem(144),
        color: '#fff',
        fontSize: rem(26),
    },
    rightView: {
        flex:1,
        borderWidth:1,
        borderColor: 'red',
        borderRadius: rem(5),
        backgroundColor: 'rgba(0,0,0,.1)'
    }
});

//make this component available to the app
export default MyClass;
