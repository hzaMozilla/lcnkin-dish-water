import React from 'react';
import Taro from '@tarojs/taro';
import { ScrollView, View, Text, Image } from '@tarojs/components';
import { AtIcon, AtTag } from 'taro-ui';
import { throttle } from '@src/lib/tool/throttle';
import './index.less';
import "taro-ui/dist/style/components/flex.scss";
import 'taro-ui/dist/style/components/tabs.scss';
import testPng from '@src/lib/image/resource/menu/8.png';
import testPng1 from '@src/lib/image/LKResource/icon_shopcart@2x.png';

interface stateParams {
  current: number,
  indexId: number,
  toTitle: string,
  tabs: Array<any>,
  scrollTop: number | string,
  top: Array<number>
}
interface tabsList {
  tabList: Array<{}>
}
export class ScrollViewTab extends React.Component<tabsList, stateParams> {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      indexId: 0,
      toTitle: "title-a",
      tabs: [
        { title: '樱花季节', anchor: 'a' },
        { title: '咖啡周边', anchor: 'b' },
        { title: '冲调零食', anchor: 'c' },
        { title: '轻松办公', anchor: 'd' }
      ],
      top: [],
      scrollTop: 0
    }
  }
  componentDidMount() {
    setTimeout(() => {
      const query = Taro.createSelectorQuery();
      let tops: Array<number> = [];
      for (let i: number = 0; i < this.state.tabs.length; i++) {
        query.select(`#view-${this.state.tabs[i].anchor}`).boundingClientRect().exec(
          (rect) => {
            tops.push(Number(rect[i].top));
          }
        );
      }
      this.setState({
        top: tops
      })
    }, 1000);
  }
  onScrollToUpper(e) {
    console.log(e)
  }
  resultTo(e: any) {
    let index: number = e?.index;
    let anchor: string = e?.item.anchor;
    this.setState({
      indexId: index,
      toTitle: "title-" + anchor,
    });
  }
  seclectTab(res: any) {
    this.setState({
      scrollTop: res.detail.scrollTop
    })
    for (let i: number = 0; i < this.state.top.length; i++) {
      if (this.state.top[i] - this.state.top[0] <= this.state.scrollTop && (i < this.state.top.length - 1 && this.state.top[i + 1] - this.state.top[0] > this.state.scrollTop)) {
        if (this.state.indexId !== i) {
          this.setState({
            indexId: i,
          });
        }
      }
    }
  }
  scrollToLeft(res) {
    throttle(this.seclectTab(res), 300, { begin: false, end: true })
  }
  render() {
    return (
      <View style={{ padding: '20rpx 20rpx 20rpx 0rpx', display: 'flex' }}>
        <ScrollView
          scroll-y
          scroll-with-animation
          style={{ height: '500px' }}
          className='scrollview-left'
        >
          {
            this.state.tabs.map((item, index) => {
              return (
                <View key={index} onClick={this.resultTo.bind(this, { item, index })}>
                  <View className="at-luckin-menu">
                    {
                      item?.tag && <View className="at-luckin-menu-tag">0乳糖</View>
                    }
                    <View className="at-luckin-menu-content">
                      {
                        this.state.indexId === index && <AtIcon prefixClass="icon" value="banyuan" />
                      }
                      <Text className={`${this.state.indexId === index ? 'selected-view' : ''}`}>{item?.title}</Text>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </ScrollView >
        <ScrollView
          scroll-y
          scroll-with-animation
          onScroll={this.scrollToLeft.bind(this)}
          scrollIntoView={this.state.toTitle}
          className='scroll-right'
          style={{ height: '500px' }}
        >
          {
            this.state.tabs.map((item, index) => {
              return (
                <View id={`view-${item.anchor}`} style={{ marginBottom: '20rpx', backgroundColor: '#fff', padding: '20rpx', borderRadius: '30rpx' }}>
                  <View style={{ width: '100%', minHeight: '100rpx' }}>
                    <View style={{ height: '60rpx', lineHeight: '50rpx', color: '#999' }}>{item.title}</View>
                    <View style={{ height: '60rpx', lineHeight: '50rpx', color: '#999' }}>{item.anchor}</View>
                  </View>
                  {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                      return (
                        <View id={`title-${item.anchor}`} key={index} style={{ minWidth: '45px', textAlign: 'center', marginBottom: '20rpx' }}>
                          <View style={{ minHeight: '182rpx' }}>
                            <View className="at-row">
                              <View className='at-col at-luckin-menu-left at-col-1 at-col--auto'>
                                <Image src={testPng} className="at-luckin-menu-left_img" />
                                {
                                  item?.tagSet && <AtTag className="at-luckin-menu-tag" name='tag-1' type='primary' circle />
                                }
                              </View>
                              <View className="at-col at-luckin-menu-right">
                                <View className="at-luckin-col-top">212121212</View>
                                <View className="at-luckin-col-center">2121212</View>
                                <View className="at-row at-row__justify--between at-luckin-col-bottom">
                                  <View className="at-luckin-menu-price">
                                    <View className="at-luckin-menu-price-content"><AtIcon prefixClass='icon' value="jiage" />{139}</View>
                                    {
                                      <View className="at-luckin-menu-price-original">{199}</View>
                                    }
                                  </View>
                                  <View className="at-col at-col-1 at-col--auto">
                                    <Image src={testPng1} style={{ width: '60rpx', height: '60rpx' }} />
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      )
                    })
                  }

                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}
