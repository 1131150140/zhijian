//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Silder from './Silder'
import WangyiNew from './WangyiNew'
import TabNavigator from 'react-native-tab-navigator';
// create a component
class Tab extends Component {
    constructor(props){
        super(props);
        this.state = {
          selectedTab:'电影'
        }
    }
    _renderTabarItems(selectedTab,icon,selectedIcon,Component){
        return (
          <TabNavigator.Item
              selected={this.state.selectedTab === selectedTab}  
              title={selectedTab} 
              titleStyle={styles.tabText}  
              selectedTitleStyle={styles.selectedTabText}  
              renderIcon={() => <Image style={styles.icon} source={icon} />}  
              renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon} />}  
              onPress={() => this.setState({ selectedTab: selectedTab })}
          >
              <Component />
          </TabNavigator.Item>
        )
    
      }
      render() {
        return (
          <View style={styles.container}>
            <TabNavigator>
              {this._renderTabarItems('电影',require('../images/souye.png'),require('../images/souye1.png'),Silder)}
              {this._renderTabarItems('音乐',require('../images/wode.png'),require('../images/wode1.png'),WangyiNew)}
            </TabNavigator>
          </View>
        );
      }
}

// define your styles
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
    },
    tabText:{
      color:'#000000',
      fontSize:10
    },
    selectedTabText:{
      color:'#D81E06'
    },
    icon:{
      width:20,
      height:20
    }
  })
  

//make this component available to the app
export default Tab;
