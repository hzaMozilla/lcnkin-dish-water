
import React from 'react';
//import Taro from '@tarojs/taro';
import { Swiper, SwiperItem, View, Image } from '@tarojs/components';
import errorPng from '@src/lib/image/LKResource/shops_nodata@2x.png';
type swiperInfoSetenums = {
  imageUrl: string,
  jumpUrl: string,
}
type State = {
  top: number
}
interface swiperProps {
  swiperInfoSet: Array<swiperInfoSetenums>,
  height?: string,
}
import "./index.less";
export class SwiperComponent extends React.Component<swiperProps, State> {
  constructor(props) {
    super(props)
    this.state = {
      top: 0
    };
    this.jumpTo = this.jumpTo.bind(this);
  }
  componentDidMount() {
  }
  jumpTo(url: string): void {
    // console.log(url)
    // Taro.navigateTo({
    //   url
    // })
  }
  render() {
    return (
      <React.Fragment>
        {
          this.props?.swiperInfoSet?.length > 0 ? <Swiper
            className="luckin-swiper-waper-content"
            style={{ minHeight: `${this.props.height ? this.props.height : '430rpx'}` }}
            indicatorColor='#999'
            indicatorActiveColor='#333'
            vertical={false}
            circular
            indicatorDots
            autoplay
          >
            {this.props?.swiperInfoSet.map((item, index) => {
              return (
                <SwiperItem key={index} onClick={() => { this.jumpTo(item?.jumpUrl) }}>
                  <View className={`'demo-text-1'${index} luckin-swiper-waper-view`}>
                    <Image src={item?.imageUrl} />
                  </View>
                </SwiperItem>
              )
            })}
          </Swiper> : <View><Image src={errorPng} /></View>}
      </React.Fragment>
    )
  }
}