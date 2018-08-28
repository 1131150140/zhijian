import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { List, Picker } from 'antd-mobile-rn';
const ss= pickerData = [
  {
      a: [
          {
              a1: [1, 2, 3, 4]
          },
          {
              a2: [5, 6, 7, 8]
          },
          {
              a3: [9, 10, 11, 12]
          }
      ]
  },
  {
      b: [
          {
              b1: [11, 22, 33, 44]
          },
          {
              b2: [55, 66, 77, 88]
          },
          {
              b3: [99, 1010, 1111, 1212]
          }
      ]
  },
  {
      c: [
          {
              c1: ['a', 'b', 'c']
          },
          {
              c2: ['aa', 'bb', 'cc']
          },
          {
              c3: ['aaa', 'bbb', 'ccc']
          }
      ]
  }
]
// import { district } from 'antd-mobile-demo-data';

const CustomChildren = (props: any) => (
  <TouchableOpacity onPress={props.onClick}>
    <View
      style={{ height: 36, paddingLeft: 15, flexDirection: 'row', alignItems: 'center' }}
    >
      <Text style={{ flex: 1 }}>{props.children}</Text>
      <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</Text>
    </View>
  </TouchableOpacity>
);

export default class PopupExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
    };
  }
  onClick = () => {
    // console.log('start loading data');
    setTimeout(() => {
      this.setState({
        // data: district,
      });
    }, 500);
  }
  onChange = (value: any) => {
    // console.log(value);
    this.setState({ value });
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <List>
          <Picker
            data={this.state.data}
            cols={2}
            value={this.state.value}
            onChange={this.onChange}
          >
            <List.Item arrow="horizontal" last onClick={this.onClick}>
              省市选择(异步加载)
            </List.Item>
          </Picker>
          <Picker
            title="选择地区"
             data={ss}
            cols={2}
            value={this.state.pickerValue}
            onChange={(v: any) => this.setState({ pickerValue: v })}
            onOk={(v: any) => this.setState({ pickerValue: v })}
          >
            <CustomChildren>Customized children</CustomChildren>
          </Picker>
        </List>
      </View>
    );
  }
}