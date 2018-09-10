import React, { Component } from 'react';
import { View, Text, StyleSheet, PixelRatio, Image, TouchableOpacity } from 'react-native';
import BaseComponent from '../../base/baseComponent';
import {rem} from '../../utils/util'
import {getNavigator} from '../../route';
export default class componentName extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  getNavigationBarProps() {
    return {
      title: '首页',
      rightTitle: '退出',
      rightButtonTextStyle: {
        color: '#fff'
      }
    }
  }
  onLeftPressed() {
    alert('left')
  }
  onRightPressed() {
      getNavigator().push({
          name: 'Login'
      });
  }
  onClick1() {
    getNavigator().push({
      name: 'CustomerAggent'
  });
  }
  renderBody() {
    return (
      <View style={styles.container}>
        <View style={styles.headTop}>
          <Text style={styles.topColor}>早上好！</Text>
          <Text style={styles.topColor}>超级梦梦酱</Text> 
          <Text style={styles.topColor2}>欢迎使用质量检验业务综合管理系统</Text>
        </View>
        <View style={styles.content}> 
        <TouchableOpacity onPress={this.onClick1.bind(this)}>
          <View style={styles.li}>
              <View style={styles.leftimg}>
                <Image style={[styles.img, {resizeMode: 'cover'}]}  source={require('../../images/icon1.png')}/>
              </View>
              <View style={styles.rightText}>
                <Text style={styles.des}>委托单录入</Text>
              </View>
          </View>
          </TouchableOpacity>
          <View style={styles.li}>
              <View style={styles.leftimg}>
                <Image style={[styles.img, {resizeMode: 'cover'}]}  source={require('../../images/icon2.png')}/>
              </View>
              <View style={styles.rightText}>
                <Text style={styles.des}>实验报告审批</Text>
              </View>
          </View>
          <View style={styles.li}>
              <View style={styles.leftimg}>
                <Image style={[styles.img, {resizeMode: 'cover'}]}  source={require('../../images/icon3.png')}/>
              </View>
              <View style={styles.rightText}>
                <Text style={styles.des}>实验收款登记</Text>
              </View>
          </View>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
  },
  binhang: {
    display: 'flex'
  },
  headTop: {
    height: rem(260),
    backgroundColor: '#6EA6FF',
    width: rem(750),
    padding: rem(35),
    display: 'flex',
    justifyContent: 'space-around'
  },
  topColor: {
    color : '#fff',
    fontSize: rem(48),
    
  },
  topColor2: {
    color : '#fff',
    fontSize: rem(24),
   
  },
  content: {
    flex:1,
    backgroundColor: '#6EA6FF'
  },
  li: {
    width:rem(680),
    display: 'flex',
    flexDirection: 'row',
    height: rem(280),
    backgroundColor: '#fff',
    borderRadius: rem(16),
    marginLeft: rem(35),
    marginTop: rem(20)
  },
  leftimg: {
    width: rem(280),
    height: rem(260),
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: rem(155),
    height: rem(174),
    
  },
  rightText: {
    flex:1,
    justifyContent: 'center'
  },
  des: {
    fontSize: rem(40),
    fontWeight: '700',
    color: '#000'
  }
});