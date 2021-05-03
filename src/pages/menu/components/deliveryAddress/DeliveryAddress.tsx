import React from 'react';
import { View } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui'
import SelectBar from './SelectBar';
// import NavBar from '@src/dependences/component/navBar/NavBar';
import './index.less';
interface map_data {
  type: string,
  name: string
}
interface DeliveryAddressProps {
  selected: string,
  value: string,
  city: string
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
      city: '北京'
    }
  }
  config = {
    navigationBarTitleText: '首页',
    usingComponents: {
      'navbar': '@src/dependences/component/navBar/NavBar', // 书写第三方组件的相对路径
    },
  }
  onChange(val) {
    console.log(val)
  }
  goToIndexes() {
    Taro.navigateTo({
      url: '/pages/index/index',
    });
  }
  render() {
    return (
      <React.Fragment>
        {/* <NavBar title="配送方式" /> */}
        <SelectBar
          mapData={mapData}
          currentSelected={(current: string) => { this.setState({ selected: current }) }}
        />
        <View>
          {
            (this.state.selected === 'pickUp' || this.state.selected === 'luckyBuy') && <View>
              <View>
                <View onClick={this.onChange.bind(this)} >{this.state.city}</View>
                <AtSearchBar
                  value={this.state.value}
                  onChange={this.onChange.bind(this)}
                />
              </View>
            </View>

          }
          {
            this.state.selected === 'luckyBuy' && <View>

            </View>

          }
        </View>
      </React.Fragment>
    )
  }
}