
import React from 'react';
import Taro from '@tarojs/taro';
import { View, RadioGroup, Radio, Label } from '@tarojs/components';
import { AtForm, AtInput, AtButton, AtSwitch, AtTag } from 'taro-ui';
import NavBar from '@src/dependences/component/navBar/NavBar';
import 'taro-ui/dist/style/components/list.scss';
import 'taro-ui/dist/style/components/form.scss';
import 'taro-ui/dist/style/components/input.scss';
import 'taro-ui/dist/style/components/button.scss';
import 'taro-ui/dist/style/components/switch.scss';
import 'taro-ui/dist/style/components/tag.scss';
import './index.less';
type genderList = {
  value: string,
  text: string,
  checked: boolean
}
type params = {
  name: string,
  gender: string,
  phoneNmuber: any,
  tag: string,
  address: string,
  isDefaultAddress: boolean,
  doorplateNumber: string,
}
interface homeDelivery {
  params: params,
  genderList: Array<genderList>
}

export default class HomeDelivery extends React.Component<{}, homeDelivery> {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        name: '',
        gender: '',
        phoneNmuber: undefined,
        tag: '',
        address: '',
        isDefaultAddress: false,
        doorplateNumber: '',
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
  render() {
    const { params } = this.state;
    return (
      <NavBar title="添加地址" backgroundColor="#f6f6f6">
        <View style={{ padding: '20rpx', marginTop: '40rpx' }}>
          <AtForm
            onSubmit={this.handelSubmit.bind(this)}
            onReset={this.onReset.bind(this)}
            className="luckin-homeDelivery-form"
          >
            <AtInput
              name='name'
              type='text'
              title="联系人"
              placeholder='用于取餐时对您的称呼'
              value={this.state.params.name}
              onChange={(name: string) => { this.setState({ params: { ...params, name } }) }}
            />
            <View className='luckin-homeDelivery-form-item'>
              <View className='line-tag'>性别</View>
              <RadioGroup
                className="luckin-homeDelivery-form-item-radio"
                onChange={(checkedGender: any) => { this.setState({ params: { ...params, gender: checkedGender.detail.value } }) }}
              >
                {this.state.genderList.map((item, index) => {
                  return (
                    <Label for={item.value} key={index}>
                      <Radio
                        value={item.value}
                        checked={item.checked}
                        color='#7286c5'
                      >{item.text}</Radio>
                    </Label>
                  )
                })}
              </RadioGroup>
            </View>
            <AtInput
              name='phoneNmuber'
              type='text'
              title="手机号"
              placeholder='请输入联系方式'
              value={this.state.params.phoneNmuber}
              onChange={(number: number) => { this.setState({ params: { ...params, phoneNmuber: number } }) }}
            />
            <AtInput
              name='address'
              type='text'
              title="收货地址"
              placeholder='请输入收货地址'
              value={this.state.params.address}
              onChange={(address: string) => { this.setState({ params: { ...params, address: address } }) }}
            />
            <AtInput
              name='doorplateNumber'
              type='text'
              title="门牌号"
              placeholder='如: 5号楼308室'
              value={this.state.params.doorplateNumber}
              onChange={(doorplateNumber: string) => { this.setState({ params: { ...params, doorplateNumber: doorplateNumber } }) }}
            />
            <View className='info-line-sex luckin-homeDelivery-form-item'>
              <View className='line-tag'>标签</View>
              {
                ['家', '公司', '学校'].map((item, index) => {
                  return (
                    <View key={index}>
                      <AtTag
                        className="luckin-homeDelivery-form-item-tag"
                        name={item}
                        active={item === this.state.params.tag}
                        type="primary"
                        circle
                        onClick={(tag: any) => { this.setState({ params: { ...params, tag: tag.name } }) }}
                      > {item}</AtTag>
                    </View>
                  )
                })
              }
            </View>
            <AtSwitch
              title='默认地址'
              checked={this.state.params.isDefaultAddress}
              onChange={(checked: boolean) => { this.setState({ params: { ...params, isDefaultAddress: checked } }) }}
            />
          </AtForm>
          <AtButton
            className="luckin-homeDelivery-form-sub"
            formType='submit'
            circle type="primary"
            onClick={this.handelSubmit.bind(this)}
          >保存</AtButton>
        </View>
      </NavBar>
    )
  }
}
