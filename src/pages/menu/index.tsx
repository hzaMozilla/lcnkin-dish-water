import React from 'react';
import { View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { AtIcon } from 'taro-ui'
import { SwiperComponent } from '@src/dependences/component/swiper';
import { ScrollViewTab } from './components/scrollSelectTab';
import { swiperInfoSet } from '@src/pages/home/data';
import { getSyetemInfoAndButtonBounding } from '@src/lib/uitls/SyetemInfoAndButtonBounding';
import './index.less';
interface menuProps {
  swiperInfo: Array<any>,
  distribution: Boolean,
  top: number
}
export default class Menu extends React.Component<{}, menuProps> {
  constructor(props) {
    super(props)
    this.state = {
      swiperInfo: [1],
      distribution: true,
      top: 0
    }
  }
  componentWillMount() {
    Taro.setNavigationBarTitle({
      title: "动态标题"
    })
    const { menuButton } = getSyetemInfoAndButtonBounding();
    this.setState({ top: menuButton.top });
  }
  navigateToIndexes() {
    Taro.navigateTo({
      url: 'components/deliveryAddress/DeliveryAddress'
    })
  }
  render() {
    return (
      <React.Fragment>
        <View className="luckin-newborn-zone" style={{ paddingTop: this.state.top }}>
          <SwiperComponent swiperInfoSet={swiperInfoSet} height={'250rpx'} />
          <View className="luckin-newborn-zone-bottom" onClick={this.navigateToIndexes.bind(this)}>
            <View className="luckin-newborn-zone-bottom_lfet" >
              <AtIcon prefixClass="icon" value="ditu" />
              <View>
                <View style={{ color: '#000' }}>壹航城</View>
                <View>距您530m</View>
              </View>
            </View>
            <View className="luckin-newborn-zone-bottom_right">
              <View
                className={`luckin-newborn-zone-bottom_self ${this.state.distribution ? 'luckin-distribution-sel' : ''}`}
                onClick={() => { this.setState({ distribution: true }) }}
              >自提</View>
              <View
                className={`luckin-newborn-zone-bottom_send ${!this.state.distribution ? 'luckin-distribution-sel' : ''}`}
                onClick={() => { this.setState({ distribution: false }) }}
              >外送</View>
            </View>
          </View>
        </View>
        <ScrollViewTab tabList={[]} />
      </React.Fragment>
    )
  }
};
