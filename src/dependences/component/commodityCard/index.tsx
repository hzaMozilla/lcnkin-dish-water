
import React from 'react';
import { View, Image } from '@tarojs/components';
import 'taro-ui/dist/style/components/card.scss';
import { AtIcon } from 'taro-ui';
import './index.less';
import '@src/styles/icon.scss'
import 'taro-ui/dist/style/components/tabs.scss';
interface carSet {
  imageUrl: any,
  price: number,
  describe: String,
  original: number,
  reduction: Boolean,
  sold: String
}
interface commodityItem {
  carItemSet: carSet
}
interface commodity {
  carInfo: Array<carSet>,
  isFull: Boolean
}

export function CommodityComponent(porps: commodity) {
  const { carInfo } = porps;
  return (
    <View className="luckin-commodity-card">
      {
        carInfo?.length && carInfo?.map((item, index) => {
          return (
            <View className="luckin-commodity-card-content" key={index}>
              <CommodityItemComponent carItemSet={item} />
            </View>
          )
        })
      }
    </View>
  )
}
export default class CommodityItemComponent extends React.Component<commodityItem> {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      imageUrl,
      describe,
      price,
      original,
      reduction,
      sold
    } = this.props.carItemSet;
    return (
      <View className="luckin-card-wrap">
        {
          <View className="luckin-card-wrap-content">
            <Image src={imageUrl} />
            <View className="luckin-card-wrap-infocar">
              <View className="luckin-card-wrap-describe">
                {describe}
              </View>
              <View className="luckin-card-wrap-price">
                <View className="luckin-card-wrap-price-content"><AtIcon prefixClass='icon' value="jiage" />{price || 139}</View>
                {
                  original && <View className="luckin-card-wrap-price-original">{original || 199}</View>}
              </View>
              {
                reduction && <View className="luckin-card-wrap-tag">
                  满减
              </View>
              }
              <View className="luckin-card-wrap-current-sold">
                <View>{'已售卖' + sold}</View>
                <View className="luckin-card-wrap-shopcar">
                  <AtIcon prefixClass="icon" value="gouwudai" />
                </View>
              </View>
            </View>
            <View className="luckin-card-wrap-discount">
              <AtIcon prefixClass="icon" value="dz1" />
            </View>
          </View>
        }
      </View>
    )
  }
}