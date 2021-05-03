import React from 'react';
import { View } from '@tarojs/components';
import './index.less'
interface params {
  name: String
}

export default class Ticket extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperInfo: [1]
    }
  }
  componentWillMount() { }

  componentDidMount() { }
  render() {
    return (
      <View>
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