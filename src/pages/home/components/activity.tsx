import React from 'react';
import { View, Image } from '@tarojs/components';
import taro from '@tarojs/taro';
type param = {
  imageUrl: string,
  jumpUrl: string,
}
interface activityInfoSet {
  activity: param,
  collectCoupons: param,
  fashion: param;
  gift: param;
  other: param;
  invitation: param;
}
interface activity {
  activityInfoSet: activityInfoSet
}

export function Activity(props: activity) {
  function navigateTo(url: string) {
    taro.navigateTo({
      url: url
    })
  }
  const { activityInfoSet } = props;
  return (
    <View className="luckin-home-activity-wrap">
      <View className="luckin-home-activity">
        <View className="luckin-home-activity-left" onClick={() => { navigateTo }}>
          <Image src={activityInfoSet?.activity?.imageUrl} />
        </View>
        <View className="luckin-home-activity-rigth">
          <View className="luckin-home-activity-rigth-rtop" onClick={() => { navigateTo }}>
            <Image src={activityInfoSet?.collectCoupons?.imageUrl} />
          </View>
          <View className="luckin-home-activity-rigth-bottom">
            <View className="luckin-home-activity-rigth-lbottom" onClick={() => { navigateTo }}>
              <Image src={activityInfoSet?.fashion?.imageUrl} />
            </View>
            <View className="luckin-home-activity-rigth-rbottom" onClick={() => { navigateTo }}>
              <Image src={activityInfoSet?.other?.imageUrl} />
            </View>
          </View>
        </View>
      </View>
      <View className="luckin-home-gift">
        <View className="luckin-home-gift-left" onClick={() => { navigateTo }}>
          <Image src={activityInfoSet?.invitation?.imageUrl} />
        </View>
        <View className="luckin-home-gift-rigth" onClick={() => { navigateTo }}>
          <Image src={activityInfoSet?.gift?.imageUrl} />
        </View>
      </View>
      {/* <View className="luckin-home-newborn-zone">
        <View className="luckin-home-newborn-top"></View>
        <View className="luckin-home-newborn-bottom">
        </View>
      </View> */}
    </View >
  )
}