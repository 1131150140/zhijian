//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, PixelRatio, Dimensions, FlatList } from 'react-native';
var screenWidth = Dimensions.get('window').width;
// create a component
class MyClass extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.font}>网易</Text>
                    <Text style={styles.font1}>新闻</Text>
                    <Text style={styles.font2}>有态度"</Text>
                </View>
                <FlatList style={styles.content} 
                data={[
                    {key: '一线城市楼市退烧 有房源一夜跌价160万'},
                    {key: '上海市民称墓地太贵买不起买房存骨灰'},
                    {key: '朝鲜再发视频：摧毁青瓦台一切化为灰烬'},
                    {key: '生活大爆炸任务原型都好牛逼'}
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
               
                <Text style={styles.yaowen}>今日要闻</Text>
                <FlatList style={styles.content} 
                data={[
                    {key: '解放军报报社大楼正在拆除 标识已被卸载'},
                    {key: '韩国停签东三省52家旅行社 或为资质朝陆常会'},
                    {key: '南京大学生发起亲吻陌生人活动 有女生献初吻'},
                    {key: '大学生发起亲吻陌生人活动 有女生献初吻'},
                    {key: '防总部署长江防汛以防御98年量级大洪水为目标'},
                    {key: '防总部署长江防汛以防御98年量级大洪水为目标'}
                ]}
                renderItem={({item}) => <Text numberOfLines={1} style={styles.item1}>{item.key}</Text>}
                />
               
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        alignItems: 'center',
    },
    header: {
        flexDirection:'row',
        height: 80,
        width: screenWidth-20,
        marginTop: 20,
        borderBottomColor: 'red',
        borderBottomWidth: 3 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    font: {
        fontSize: 30,
        color: 'red',
        fontWeight: '700'
    },
    font1: {
        color: '#fff',
        backgroundColor: 'red',
        fontSize:30,
        fontWeight: '700'
    },
    font2: {
        color: '#000',
        fontSize:30,
        fontWeight: '700'
    },
    item: {
        fontSize:16,
        paddingTop: 6,
        paddingBottom: 6,
        width:screenWidth-60,
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1/PixelRatio.get()
    },
    item1: {
        fontSize:16,
        paddingTop: 6,
        paddingBottom: 6,
        width:screenWidth-60,
    },
    yaowen: {
        fontSize:22,
        color: 'red',
        alignSelf:'flex-start',
        paddingLeft: 30,
    },
    content: {
        flexGrow: 0
    }
});

//make this component available to the app
export default MyClass;
