
import React from 'react';
import Taro from '@tarojs/taro';
import { View, RadioGroup, Radio, Label } from '@tarojs/components';
import { AtForm, AtInput, AtButton, AtSwitch } from 'taro-ui';
import NavBar from '@src/dependences/component/navBar/NavBar';
import 'taro-ui/dist/style/components/list.scss';
import 'taro-ui/dist/style/components/form.scss';
import 'taro-ui/dist/style/components/input.scss';
import 'taro-ui/dist/style/components/button.scss';
import "taro-ui/dist/style/components/switch.scss";
import './index.less';
type sexList = {
  value: string,
  text: string,
  checked: boolean
}
interface homeDelivery {
  name: string,
  gender: string,
  phoneNmuber: number | null,
  tag: string,
  address: string,
  isDefaultAddress: boolean,
  doorplateNumber: string,
  sexList: Array<sexList>
}

export default class HomeDelivery extends React.Component<{}, homeDelivery> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      phoneNmuber: null,
      tag: '',
      address: '',
      isDefaultAddress: false,
      doorplateNumber: '',
      sexList: [
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

  }
  onReset() { }
  handleChange() { }
  render() {
    return (
      <NavBar title="添加地址" backgroundColor="#f6f6f6">
        <View style={{ padding: '20rpx', marginTop: '40rpx' }}>
          <AtForm
            onSubmit={this.handelSubmit.bind(this)}
            onReset={this.onReset.bind(this)}
            className="lckin-homeDelivery-form"
          >
            <AtInput
              name='value'
              type='text'
              title="联系人"
              placeholder='用于取餐时对您的称呼'
              value={this.state.name}
              onChange={(number: number) => { this.setState({ phoneNmuber: number }) }}
            />
            <View className='info-line-sex lckin-homeDelivery-form-item'>
              <View className='line-sex'>性别</View>
              <RadioGroup
                className="lckin-homeDelivery-form-item-radio"
                onChange={(checkedGender: any) => { this.setState({ gender: checkedGender.detail.value }) }}
              >
                {this.state.sexList.map((item, index) => {
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
              name='value'
              type='text'
              title="手机号"
              placeholder='请输入联系方式'
              value={this.state.name}
              onChange={(name: string) => { this.setState({ name: name }) }}
            />
            <AtInput
              name='value'
              type='text'
              title="收货地址"
              placeholder='请输入收货地址'
              value={this.state.address}
              onChange={(address: string) => { this.setState({ address: address }) }}
            />
            <AtInput
              name='value'
              type='text'
              title="门牌号"
              placeholder='如: 5号楼308室'
              value={this.state.name}
              onChange={(name: string) => { this.setState({ doorplateNumber: name }) }}
            />
            <AtSwitch
              title='默认地址'
              checked={this.state.isDefaultAddress}
              onChange={(checked: boolean) => { this.setState({ isDefaultAddress: checked }) }}
            />
          </AtForm>
          <AtButton
            className="lckin-homeDelivery-form-sub"
            formType='submit'
            circle type="primary"
            onClick={this.handelSubmit.bind(this)}
          >保存</AtButton>
        </View>
      </NavBar>
    )
  }
}
