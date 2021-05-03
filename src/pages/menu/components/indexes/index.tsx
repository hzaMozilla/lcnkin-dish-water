
import React from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtIndexes } from 'taro-ui';
import NavBar from '@src/dependences/component/navBar/NavBar';
import 'taro-ui/dist/style/components/toast.scss';
import 'taro-ui/dist/style/components/indexes.scss';
import 'taro-ui/dist/style/components/list.scss';
import './index.less';

export class IndexesComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: props.selected
    };
  }
  onNavigateBack(item) {
    Taro.navigateBack({
      delta: item // 返回上一级页面。
    });
  }
  config: Config = {
    // usingComponents: {
    //   'navbar': '@src/dependences/component/navBar/NavBar', // 书写第三方组件的相对路径
    // },
    // window: {
    //   backgroundTextStyle: 'light',
    //   navigationBarBackgroundColor: '#fff',
    //   navigationBarTitleText: 'Taro',
    //   navigationBarTextStyle: 'black',
    //   navigationStyle: 'custom'
    // }
  }
  render() {
    const list = [{
      title: 'A',
      key: 'A',
      items: [
        {
          'name': '阿坝'
          // 此处可加其他业务字段
        },
        {
          'name': '阿拉善'
        }]
    },
    {
      title: 'B',
      key: 'B',
      items: [
        {
          'name': '北京'
        },
        {
          'name': '保定'
        }]
    }
    ]
    return (
      <View style={{ height: '100%', position: 'relative' }}>
        {/* <NavBar title="配送地址" /> */}
        <View className="lcukin-map-pin-warp" onClick={this.onNavigateBack.bind(this)}>
          <View>选择城市</View>
          <View className="lcukin-map-pin-warp-city">
            <View className="at-icon at-icon-map-pin" />
            <View>深圳</View>
          </View>
        </View>
        <AtIndexes
          list={list}
          animation={true}
          onClick={this.onNavigateBack.bind(this)}>
        </AtIndexes>
      </View >
    )
  }
}
