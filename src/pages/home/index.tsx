import React from 'react';
import { connect } from 'react-redux';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { saveUserInfo, savePage } from '@src/store/action';
import { SwiperComponent } from '@src/dependences/component/swiper';
import TabBar from '@src/common/tab';
import TabSelect from '@src/dependences/component/tabs';
import { Activity } from './components/activity';
import './index.less';
import { swiperInfoSet, activityInfoSet } from './data';
type tabList = {
  title: string
}
const tabList: Array<tabList> = [{ title: '樱花季节' }, { title: '咖啡周边' }, { title: '冲调零食' }, { title: '轻松办公' }];

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperInfo: [1]
    }
  }
  config = {
    navigationStyle: 'default',
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'black',
      navigationStyle: 'default',
      navigationBarTitleText: '菜单1111',
    }
  }
  getName(url: string) {
    console.log(url, Taro)
  }
  render() {
    return (
      <View className="at-luckin-home-wrap">
        <SwiperComponent swiperInfoSet={swiperInfoSet} />
        <Activity activityInfoSet={activityInfoSet} />
        <TabSelect tabList={tabList} />
        <TabBar />
      </View >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
    saveUserInfo: state.videType,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    savePage: ({ pageSize, pageIndex }) => dispatch(savePage({ pageSize, pageIndex })),
    saveUserInfo: (videType) => dispatch(saveUserInfo(videType)),
  }
}
// connect方法可以省略mapStateToProps参数，防止UI 组件就不会订阅Store，避免Store 的更新引起 UI 组件的更新。
export default connect(mapStateToProps, mapDispatchToProps)(Home);