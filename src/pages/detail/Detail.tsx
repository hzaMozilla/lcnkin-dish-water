
import React from 'react';
import Taro from '@tarojs/taro';
import { View, RadioGroup, Radio, Label } from '@tarojs/components';
import { AtForm, AtInput, AtButton, AtSwitch, AtTag, AtIcon } from 'taro-ui';
import { SwiperComponent } from '@src/dependences/component/swiper';
import { swiperInfoSet } from '@src/pages/home/data';
import { getSyetemInfoAndButtonBounding } from '@src/lib/uitls/SyetemInfoAndButtonBounding';
import 'taro-ui/dist/style/components/form.scss';
import 'taro-ui/dist/style/components/button.scss';
import 'taro-ui/dist/style/components/switch.scss';
import 'taro-ui/dist/style/components/tag.scss';
import 'taro-ui/dist/style/components/nav-bar.scss';
import 'taro-ui/dist/style/components/icon.scss';
import './detail.less';
type GenderList = {
  value: string,
  text: string,
  checked: boolean
}
type Params = {
  temperature: string,
  brix: string,
  cream: string,
}
type ButtonBounding = {
  top: string,
  paddingRight: string,
}
interface DetailState {
  params: Params,
  genderList: Array<GenderList>,
  buttonBounding: ButtonBounding
}

export default class HomeDelivery extends React.Component<{}, DetailState> {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        temperature: '',
        brix: '',
        cream: '',
      },
      buttonBounding: {
        top: '0px',
        paddingRight: '0px',
      },
      genderList: [
        {
          value: '男',
          text: '男',
          checked: true
        },
        {
          value: '女',
          text: '女',
          checked: false
        }
      ],
    };
  }
  componentDidMount() {
    const { menuButton } = getSyetemInfoAndButtonBounding();
    console.log(menuButton)
    this.setState({
      buttonBounding: {
        top: `${menuButton?.top}px`,
        paddingRight: `${menuButton?.width}px`
      }
    });
  }
  onNavigateBack(item) {
    Taro.navigateBack({
      delta: item
    });
  }
  handelSubmit() {
    console.log(this.state)
  }
  onReset() { }
  handleChange() { }
  resultTo() { }
  render() {
    const { buttonBounding, params } = this.state
    return (
      <View className="lcukin-detail-warp">
        <View
          className="luckin-detailNavbar-warp"
          style={{ top: buttonBounding.top }}
        >
          <View
            className="luckin-detailNavbar-content"
            style={{ paddingRight: buttonBounding.paddingRight }}
          >
            <AtIcon
              prefixClass="icon"
              value='guanbi-'
              size="25"
              color="#615652"
              onClick={this.resultTo.bind(this)}
            />
            <View className="icon-right">
              <AtIcon
                prefixClass="icon"
                value='fenxiang'
                size="20"
                color="#3b3535"
                onClick={this.resultTo.bind(this)}
              />
            </View>
          </View>
        </View>
        <SwiperComponent
          swiperInfoSet={swiperInfoSet}
          indicatorDots={false}
          height="570rpx"
        />
        <View className="lcukin-detail-warp-more">

        </View>
        <View className="lcukin-detail-warp-form">
          <View className="lcukin-detail-warp-more">水龙吟.乌龙轻乳茶</View>
          <AtForm className="lcukin-detailForm-content">
            <View className='lcukin-detailForm-content-item'>
              <View className='line-tag'>标签</View>
              <View className="lcukin-detailForm-content-item-tag">
                {
                  ['热', '冰', '去冰', '正常冰'].map((item, index) => {
                    return (
                      <View key={index}>
                        <AtTag
                          className="radio-tag"
                          name={item}
                          active={item === this.state.params.temperature}
                          circle
                          onClick={({ name }) => { this.setState({ params: { ...params, temperature: name } }) }}
                        > {item}</AtTag>
                      </View>
                    )
                  })
                }
              </View>
            </View>
            <View className='lcukin-detailForm-content-item'>
              <View className='line-tag'>标签</View>
              <View className="lcukin-detailForm-content-item-tag">
                {
                  ['热', '冰', '去冰', '正常冰'].map((item, index) => {
                    return (
                      <View key={index}>
                        <AtTag
                          className="radio-tag"
                          name={item}
                          active={item === this.state.params.temperature}
                          type="primary"
                          circle
                          onClick={({ name }) => { this.setState({ params: { ...params, temperature: name } }) }}
                        > {item}</AtTag>
                      </View>
                    )
                  })
                }
              </View>
            </View>
            <View className='lcukin-detailForm-content-item'>
              <View className='line-tag'>标签</View>
              <View className="lcukin-detailForm-content-item-tag">
                {
                  ['热', '冰', '去冰', '正常冰xx'].map((item, index) => {
                    return (
                      <View key={index}>
                        <AtTag
                          className="radio-tag"
                          name={item}
                          active={item === this.state.params.temperature}
                          type="primary"
                          circle
                          onClick={({ name }) => { this.setState({ params: { ...params, temperature: name } }) }}
                        > {item}</AtTag>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </AtForm>
        </View>
      </View>
    )
  }
}
