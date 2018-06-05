//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';

// create a component
class ListView1 extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource : ds.cloneWithRows(['第一行', '第二行', '第三行'])
    }
  }
  renderRow(rowData) {
    return <Text>{rowData}1231</Text>
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView initialListSize={1}  dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}>

        </ListView>
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
  
  },
});

//make this component available to the app
export default ListView1;
