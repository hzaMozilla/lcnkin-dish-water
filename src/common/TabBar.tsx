import { AtTabBar } from 'taro-ui';
import React from 'react';
import Taro from '@tarojs/taro';
import TabsEnum from '@src/lib/enum/tabsRoute'

interface TabBarConfig {
  current: number
}
interface TabBarPorps {

}
const iconType: string = 'icon';
export default class TabBar extends React.Component<TabBarPorps, TabBarConfig>{
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }
  handleClick(value: number): void {
    this.setState({
      current: value
    })
    interface routeType {
      id: Number,
      icon: String,
      path: String,
      name: String,
      check: Boolean,
      style: Object
    }
    Taro.navigateTo({
      url: `/pages${TabsEnum.find((item: routeType) => item?.id === value)?.path}/index`
    })
  }
  render() {
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: '首页', iconPrefixClass: iconType, iconType: 'shouye1', },
          { title: '菜单', iconPrefixClass: iconType, iconType: 'Coffee', },
          { title: '订单', iconPrefixClass: iconType, iconType: 'dingdan', },
          { title: '购物袋', iconPrefixClass: iconType, iconType: 'gouwudai', },
          { title: '我的', iconPrefixClass: iconType, iconType: 'wode', text: 8, },
        ]}
        onClick={this.handleClick.bind(this,)}
        current={this.state.current}
        iconSize={20}
        className="luckin-at-tabbar-icon"
      ></AtTabBar>
    )
  }
}
