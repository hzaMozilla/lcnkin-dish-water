import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
//import { AtNavBar } from 'taro-ui';
import { getSyetemInfoAndButtonBounding } from '@src/lib/uitls/SyetemInfoAndButtonBounding';
import './index.less';
//import "taro-ui/dist/style/components/nav-bar.scss";
//import "taro-ui/dist/style/components/icon.scss";
interface NavBar {
  title: string,
  children?: any,
  backgroundColor?: string,
}
function NavBar(props: NavBar) {
  const [defaultTop, setDefaulTop] = useState('0px');
  useEffect(() => {
    const { menuButton } = getSyetemInfoAndButtonBounding();
    setDefaulTop(`${menuButton.top}px`);
  }, []);
  function resultTo() {
    Taro.navigateBack({
      delta: 1 // 返回上一级页面。
    });
  }
  return (
    // <View
    //   className="lcnkin-address-navbar-warp"
    //   style={{ marginTop: defaultTop, backgroundColor: props.backgroundColor }}
    // >
    //   <AtNavBar
    //     onClickRgIconSt={resultTo}
    //     onClickRgIconNd={resultTo}
    //     onClickLeftIcon={resultTo}
    //     color='#000'
    //     title={props?.title}
    //     leftIconType={'chevron-left'}
    //     className="lcnkin-address-navbar"
    //   />
    //   {props.children}
    // </View>
    <View className="lcnkin-address-navbar-warp" style={{ marginTop: defaultTop, backgroundColor: props.backgroundColor }}>
      <View className="lcnkin-address-navbar">
        <View className='at-icon at-icon-chevron-left' onClick={resultTo} />
        <View style={{ margin: 'auto' }}>{props?.title}</View>
      </View>
      {props.children}
    </View>
  )
}
export default NavBar;