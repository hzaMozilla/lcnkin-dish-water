import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import "taro-ui/dist/style/components/icon.scss";
interface map_data {
  type: string,
  name: string,
}
interface selectBarProps {
  currentSelected: (current: string) => void,
  mapData: Array<map_data>
}
export default function SelectBar(props: selectBarProps) {
  const [defaultSelected, setDefault] = useState('pickUp');
  useEffect(() => {
    return () => {
    };
  })
  function handelSelect(item: map_data): void {
    setDefault(item?.type);
    props.currentSelected(item?.type);
  }
  function redirectToIndexes() {
    Taro.navigateTo({
      url: 'Indexes'
    })
  }
  return (
    <View className="luckin-delivery-warp">
      <View className="luckin-delivery-address">
        {
          props?.mapData.map((item, index) => {
            return (
              <View
                className={`luckin-delivery-address-selectbar ${defaultSelected === item?.type ? 'luckin-distribution-sel' : ''}`}
                key={index}
                onClick={() => { handelSelect(item); redirectToIndexes() }}
              >
                { item.name}
              </View>
            )
          })
        }
      </View>
    </View>
  )
}