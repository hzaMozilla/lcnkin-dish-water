import React from 'react';
import { View } from '@tarojs/components';
import taro from '@tarojs/taro';
import './index.less'
interface params {
  name: String
}

export default class ShopPackage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperInfo: [1]
    }
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  getName(params: params) {
    console.log(params, taro)
  }
  render() {
    return (
      <View>
        <View className="luckin-home-newborn-zone">
          <View className="luckin-home-newborn-top"></View>
          <View className="luckin-home-newborn-bottom">
          </View>
        </View>
      </View >
    )
  }
}