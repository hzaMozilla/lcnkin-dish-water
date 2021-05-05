import React from 'react';
import { AtTabs, AtTabsPane } from 'taro-ui';
import { CommodityComponent } from '@src/dependences/component/commodityCard';
import { carInfo } from './data';
import 'taro-ui/dist/style/components/tabs.scss';

interface stateParams {
  current: number
}
interface tabsList {
  tabList: Array<{}>
}
export default class TabSelect extends React.Component<tabsList, stateParams> {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  render() {
    return (
      <AtTabs current={this.state.current} tabList={[{ title: '樱花季节' }, { title: '咖啡周边' }, { title: '冲调零食' }, { title: '轻松办公' }]} onClick={this.handleClick.bind(this)}>
        {
          this.props?.tabList?.length > 0 && this.props?.tabList.map((item, index) => {
            return (
              <AtTabsPane current={this.state.current} index={index} key={index}>
                <CommodityComponent carInfo={carInfo} isFull={true} />
              </AtTabsPane>
            )
          })
        }
      </AtTabs>
    )
  }
}