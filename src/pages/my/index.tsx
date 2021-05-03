import React from 'react';
import { View } from '@tarojs/components';
import taro from '@tarojs/taro';
import './index.less';

interface params {
  name: String
}

export default class My extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperInfo: [1]
    }
  }
  componentWillMount() { }

  componentDidMount() { }

  getName(params: params) {
    console.log(params, taro)
  }
  render() {
    return (
      <View>
        <View className="luckin-home-activity">
          <View className="luckin-home-activity-left"></View>
          <View className="luckin-home-activity-rigth">
            <View className="luckin-home-activity-rigth-rtop"></View>
            <View className="luckin-home-activity-rigth-bottom">
              <View className="luckin-home-activity-rigth-lbottom"></View>
              <View className="luckin-home-activity-rigth-rbottom"></View>
            </View>
          </View>
        </View>
        <View className="luckin-home-gift">
          <View className="luckin-home-gift-left"></View>
          <View className="luckin-home-gift-rigth"></View>
        </View>
        <View className="luckin-home-newborn-zone">
          <View className="luckin-home-newborn-top"></View>
          <View className="luckin-home-newborn-bottom">
          </View>
        </View>
      </View >
    )
  }
}