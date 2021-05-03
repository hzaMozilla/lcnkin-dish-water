import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { getSyetemInfoAndButtonBounding } from '@src/lib/uitls/SyetemInfoAndButtonBounding';
import './index.less';

interface NavBar {
  title: string,
}
function NavBar(props: NavBar) {
  const [defaultTop, setDefaulTop] = useState('0px');
  useEffect(() => {
    const menuButton = getSyetemInfoAndButtonBounding();
    console.log(menuButton)
    setDefaulTop(`${24}px`);
  }, []);
  function resultTo() {
    Taro.navigateBack({
      delta: 1 // 返回上一级页面。
    });
  }
  return (
    <View className="lcnkin-address-navbar" style={{ marginTop: defaultTop }}>
      <View className='at-icon at-icon-chevron-left' onClick={resultTo} />
      <View style={{ margin: 'auto' }}>{props?.title}</View>
    </View>
  )
}
export default NavBar;