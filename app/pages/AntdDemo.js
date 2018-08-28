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
import Flex from './antd/Flex'
import WinkBlank from './antd/WinkBlank'
import WhiteSpace from './antd/WhiteSpace'
import Drawer from './antd/Drawder'
import Popover from './antd/Popover'
import Pagin from './antd/Pagin'
import Segmented from './antd/Segmented'
import Tabs from './antd/Tabs'
import Tabber from './antd/Tabbar'
import Button from './antd/Button'
import CheckBox from './antd/CheckBox'
import DatePicker from './antd/DatePicker'
import DatePickerView from './antd/DatePickerView'
import InputItem from './antd/InputItem'
import ImagePicker from './antd/ImagePicker'
import Xuanze from './antd/Xuanze'
import PickerView from './antd/PickerView'
import Radios from './antd/Radios'
import Search from './antd/Search'
import Silder from './antd/Silder'
import TextreaTe from './antd/TextreaTe'
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  pressButton() {
    this.props.navigator.push({
        component: Flex
    })
  }
  pressButton1() {
    this.props.navigator.push({
        component: WinkBlank
    })
  }
  pressButton2() {
    this.props.navigator.push({
        component: WhiteSpace
    })
  }
  pressButton3() {
    this.props.navigator.push({
        component: Drawer
    })
  }
  pressButton4() {
    this.props.navigator.push({
        component: Popover
    })
  }
  pressButton5() {
    this.props.navigator.push({
        component: Pagin
    })
  }
  pressButton6() {
    this.props.navigator.push({
        component: Segmented
    })
  }
  pressButton7() {
    this.props.navigator.push({
        component: Tabs
    })
  }
  pressButton8() {
    this.props.navigator.push({
        component: Tabber
    })
  }
  pressButton9() {
    this.props.navigator.push({
        component: Button
    })
  }
  pressButton10() {
    this.props.navigator.push({
        component: CheckBox
    })
  }
  pressButton11() {
    this.props.navigator.push({
        component: DatePicker
    })
  }
  pressButton12() {
    this.props.navigator.push({
        component: DatePickerView
    })
  }
  pressButton13() {
    this.props.navigator.push({
        component: InputItem
    })
  }
  pressButton14() {
    this.props.navigator.push({
        component: ImagePicker
    })
  }
  pressButton15() {
    this.props.navigator.push({
        component: Xuanze
    })
  }
  pressButton16() {
    this.props.navigator.push({
        component: PickerView
    })
  }
  pressButton17() {
    this.props.navigator.push({
        component: Radios
    })
  }
  pressButton18() {
    this.props.navigator.push({
        component: Search
    })
  }
  pressButton19() {
    this.props.navigator.push({
        component: Silder
    })
  }
  pressButton20() {
    this.props.navigator.push({
        component: TextreaTe
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

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.pressButton.bind(this)}>
                    <Text style={styles.defaultText}>Flex</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton1.bind(this)}>
                    <Text style={styles.defaultText}>2边留白</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton2.bind(this)}>
                    <Text style={styles.defaultText}>上下留白</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton3.bind(this)}>
                    <Text style={styles.defaultText}>抽屉</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton4.bind(this)}>
                    <Text style={styles.defaultText}>气泡</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton5.bind(this)}>
                    <Text style={styles.defaultText}>分页</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton6.bind(this)}>
                    <Text style={styles.defaultText}>分段器</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton7.bind(this)}>
                    <Text style={styles.defaultText}>tabs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton8.bind(this)}>
                    <Text style={styles.defaultText}>tabbar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton9.bind(this)}>
                    <Text style={styles.defaultText}>Button</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton10.bind(this)}>
                    <Text style={styles.defaultText}>多选框</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton11.bind(this)}>
                    <Text style={styles.defaultText}>时间选择器</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton12.bind(this)}>
                    <Text style={styles.defaultText}>选择器</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton13.bind(this)}>
                    <Text style={styles.defaultText}>文本输入框</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton14.bind(this)}>
                    <Text style={styles.defaultText}>图片选择器</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton15.bind(this)}>
                    <Text style={styles.defaultText}>选择器2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton16.bind(this)}>
                    <Text style={styles.defaultText}>选择器3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton17.bind(this)}>
                    <Text style={styles.defaultText}>单选框</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton18.bind(this)}>
                    <Text style={styles.defaultText}>搜索框</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton19.bind(this)}>
                    <Text style={styles.defaultText}>滑动输入框</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressButton20.bind(this)}>
                    <Text style={styles.defaultText}>多行输入框</Text>
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
  flex1: {
    flex: 1,
    backgroundColor : "#3399cc"
  },
  defaultText:{
    textAlign:'center',
    color: 'red'
  }
 

  
});
