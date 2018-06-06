
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View,
    Text,
    StyleSheet,
    PixelRatio,
    TextInput,
    TouchableOpacity,
    BackHandler,
    Platform
} from 'react-native';
import Slider from './Silder'
import WangyiNew from './WangyiNew'
import TouchableHighlight from './TouchableHighlight'
import PanResponder1 from './PanResponder1'
import Lmage from './Lmage'
import Login from './Login'
import ListView1 from './ListView1'
import ListView2 from './ListView2'
import Baidu from './Baidu'
import FadeInView from './FadeInView'
import Tab from './Tab'
import TabTopView from './TabTopView'
import Photo from './Photo'
import Mbox1 from './Mbox1'
class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  gaibian(e) {
    this.setState({
      text: e.target.value
    })
  }
  pressButton() {
    this.props.navigator.push({
        title: 'Second',
        component: Slider
    })
  }
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  onBackAndroid = () => {
    const nav = this.props.navigator;
    const routers = nav.getCurrentRoutes();
    if (routers.length > 1) {
      nav.pop();
      return true;
    }
    return false;
  };

  pressButton1() {
    this.props.navigator.push({
        title: 'third',
        component: WangyiNew
    })
  }

  pressButton2() {
    this.props.navigator.push({
        title: 'four',
        component: TouchableHighlight
    })
  }
  pressButton3() {
    this.props.navigator.push({
        title: 'four',
        component: PanResponder1
    })
  }
  pressButton4() {
    this.props.navigator.push({
        title: 'six',
        component: Lmage
    })
  }
  pressButton5() {
    this.props.navigator.push({
        title: 'seven',
        component: Login
    })
  }
  pressButton6() {
    this.props.navigator.push({
        title: 'eight',
        component: ListView1
    })
  }

  pressButton7() {
    this.props.navigator.push({
        title: 'night',
        component: ListView2
    })
  }
  pressButton8() {
    this.props.navigator.push({
        title: 'ten',
        component: Baidu
    })
  }
  pressButton9() {
    this.props.navigator.push({
        title: 'eleven',
        component: FadeInView
    })
  }
  pressButton10() {
    this.props.navigator.push({
        title: 'twelve',
        component: Tab
    })
  }
  pressButton11() {
    this.props.navigator.push({
        title: 'thirteen',
        component: TabTopView
    })
  }
  pressButton12() {
    this.props.navigator.push({
        title: 'thirteen',
        component: Photo
    })
  }
  pressButton13() {
    this.props.navigator.push({
        title: 'thirteen1',
        component: Mbox1
    })
  }
    render() {
        return (
            <View style={{flex: 1}}>
               <View style={styles.container}>
          <View style={[styles.item, styles.juzhong]}>
            <Text style={styles.font}>酒店</Text>
          </View>
          <View style={[styles.item, styles.borderLeft1]}>
            <View style={[styles.erji, styles.juzhong,styles.borderBot]}>
              <Text style={styles.font}>海外酒店</Text>
            </View>
            <View style={[styles.erji, styles.juzhong]}>
            <Text style={styles.font}>特惠酒店</Text>
            </View>
          
          </View>
          <View style={styles.item}>
          <View style={[styles.erji, styles.juzhong, styles.borderBot]}>
              <Text style={styles.font}>团购</Text>
            </View>
            <View style={[styles.erji, styles.juzhong]}>
            <Text style={styles.font}>客栈，公寓</Text>
            </View>
          </View>
          </View>
          <Image  source={require('../images/sc.png')} />
          <TextInput placeholder="请输入搜素关键字" style={styles.inputs} value={this.state.text} onChange={this.gaibian.bind(this)} textAlign="left" />
          <TouchableOpacity onPress={this.pressButton.bind(this)}>
                    <Text style={styles.defaultText}>跳往Second</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton1.bind(this)}>
                    <Text style={styles.defaultText}>跳往third</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton2.bind(this)}>
                    <Text style={styles.defaultText}>跳往four</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton3.bind(this)}>
                    <Text style={styles.defaultText}>跳往five</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton4.bind(this)}>
                    <Text style={styles.defaultText}>跳往six</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton5.bind(this)}>
                    <Text style={styles.defaultText}>跳往seven</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton6.bind(this)}>
                    <Text style={styles.defaultText}>跳往eight</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton7.bind(this)}>
                    <Text style={styles.defaultText}>跳往night</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton8.bind(this)}>
                    <Text style={styles.defaultText}>跳往ten</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton9.bind(this)}>
                    <Text style={styles.defaultText}>跳往eleven</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton10.bind(this)}>
                    <Text style={styles.defaultText}>跳往twelve</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton11.bind(this)}>
                    <Text style={styles.defaultText}>跳往fourthrnn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton12.bind(this)}>
                    <Text style={styles.defaultText}>跳往photo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton13.bind(this)}>
                    <Text style={styles.defaultText}>跳往mbox</Text>
          </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      height:80,
      flexDirection: 'row',
      borderRadius: 5,
      marginTop: 30,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor: '#ff0067',
      padding: 2
    },
    item: {
      flex:1,
    },
    juzhong:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    erji: {
      flex: 1
    },
    font: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    },
    borderLeft1: {
      borderLeftWidth: 1/PixelRatio.get() ,
      borderRightWidth: 1/PixelRatio.get(),
      borderColor: '#fff',
    },
    borderBot: {
      borderBottomWidth: 1/PixelRatio.get() ,
      borderColor: '#fff'
    },
    flex: {
      flex:1
    },
    inputs: {
      color: 'red',
      borderWidth: 0
    }
   
  
    
  });
  

export default Splash;