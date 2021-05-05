import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtSearchBar, AtIcon } from 'taro-ui'
import SelectBar from './SelectBar';
import NavBar from '@src/dependences/component/navBar/NavBar';
import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/flex.scss";

import './index.less';
interface map_data {
  type: string,
  name: string
}
interface DeliveryAddressProps {
  selected: string,
  value: string,
  city: string,
  placeholder: string,
}
const mapData: Array<map_data> = [
  {

    type: 'pickUp',
    name: '门店自提'
  },
  {
    type: 'distribution',
    name: '送货上门'
  },
  {
    type: 'luckyBuy',
    name: '瑞即购'
  }
]
export default class DeliveryAddress extends React.Component<{}, DeliveryAddressProps> {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'pickUp',
      value: '',
      city: '北京',
      placeholder: '输入地址寻找周边门店'
    }
  }
  onChange(val) {
    console.log(val)
  }
  onSelect(current: any) {
    this.setState({ selected: current });
    current.type === 'luckyBuy' && this.setState({ placeholder: '输入地址寻找周瑞即购' });
  }
  redirectToIndexes() {
    if (['pickUp', 'luckyBuy'].includes(this.state.selected)) {
      Taro.navigateTo({
        url: '/Indexes'
      })
    } else {
      Taro.navigateTo({
        url: '/Indexes'
      })
    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar title="配送方式">
          <SelectBar
            mapData={mapData}
            currentSelected={(current: string) => { this.onSelect.bind(this, current) }}
          />
          <View style={{ padding: '20rpx' }}>
            {
              (this.state.selected === 'pickUp' || this.state.selected === 'luckyBuy') && <View>
                <View className="luckin-delivery-address-searchbar">
                  <View
                    className="luckin-delivery-address-city"
                    onClick={this.redirectToIndexes.bind(this)}
                  >
                    {this.state.city}
                    <AtIcon value="chevron-down" size='20' />
                  </View>
                  <View>|</View>
                  <AtSearchBar
                    className="luckin-delivery-address-searchinp"
                    value={this.state.value}
                    onChange={this.onChange.bind(this)}
                    placeholder={this.state.placeholder}
                  />
                </View>
                {
                  [100, 222, 345, 4888, 5000, 6000].map((item, index) => {
                    return (
                      <View className="luckin-deliveryAddress-item" key={index}>
                        <View className="luckin-deliveryAddress-item-top">
                          <View className='at-item-col1'>瑞幸咖啡</View>
                          <View className='at-item-col2'>壹航城店(NO.6599)</View>
                          <View className='at-item-col3'>{item}m</View>
                        </View>
                        <View className="luckin-deliveryAddress-item-center">
                          <AtIcon value="clock" size='20' color="#555" />
                          <View className='at-item-col1'>7:00-20:00</View>
                          <View className='at-item-col2'>打烊</View>
                        </View>
                        <View className="luckin-deliveryAddress-item-bottom">
                          <AtIcon value="map-pin" size='20' color="#555" />
                          <View className='at-item-col1'>宝安区航城街道xxx</View>
                          <View className='at-item-col2'>查看详情</View>
                        </View>
                      </View>
                    )
                  })

                }
              </View>

            }
            {
              this.state.selected === 'luckyBuy' && <View>

              </View>

            }
          </View>
        </NavBar>
      </React.Fragment>
    )
  }
}