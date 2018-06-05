//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, TouchableOpacity, Image, PixelRatio } from 'react-native';

// create a component
class ListView2 extends Component {
  constructor(props) {
    super(props)
    this.state= {
      dataSource :new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    } 
    
  }
  componentWillMount() {
    let data = require('../data/list.json')
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data.list)
    })
  }
  pressRow(data) {
    alert('点击了'+ JSON.stringify( data,null, 2))
  }
  rendercell (cellData) {
    return (
      <TouchableOpacity onPress={()=>this.pressRow(cellData)}>
        <View style={styles.cellContainer}>
            <Image style={styles.thumbnail} source={{uri: cellData.pic}}></Image>
            <View style={styles.itemCellView}>
                <Text numberOfLines={1} style={styles.title}>{cellData.title}</Text>
                <Text>
                产品编号：{cellData.itemDivice}
                </Text>
            </View>
            <Text style={styles.itemDivice}></Text>
        </View>
      </TouchableOpacity>
    )
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.recommendHeader}>
            <Text>猜你喜欢</Text>
        </View>
        <View style={styles.container}>
          <ListView style={styles.listView} dataSource={this.state.dataSource} renderRow={this.rendercell.bind(this)}>

          </ListView>
        </View>
      </View>
    );
  }
  
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#fff'
  },
  cellContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  cellRightContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10
  },
  recommendHeader: {
    height: 35,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e9e9e9',
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: 'white'
  },
  itemCellView: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  thumbnail: {
    width: 80,
    height:60,
    borderWidth: 1,
    borderColor: '#e9e9e9'
  },
  title: {
    fontSize: 18,
    color: '#999',
    marginBottom: 8,
    textAlign: 'left'
  },
  id: {
    fontSize: 16,
    textAlign:'center'
  },
  itemDivice: {
    height:80,
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 1/PixelRatio.get(),
    flex:1
  }
});

//make this component available to the app
export default ListView2;
