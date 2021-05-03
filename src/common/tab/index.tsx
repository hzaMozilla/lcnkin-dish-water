import * as React from 'react';
import { HashRouter as BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import TabsEnum from '@src/lib/enum/tabsRoute';
import { Home, ShopPackage, My, Ticket, Menu } from "@src/pages/index";
import { View, Icon } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
//import BasicInput from "src/libs/navbart/login/other/phoneLogin";
import "./index.less";

const TabBarExample = function () {
  return (
    <View className="tabbar-flex">
      <View>
        <AtIcon prefixClass="icon" value="icon-1">首页</AtIcon>
      </View>
      <View>
        <AtIcon prefixClass="icon" value="icon-Coffee">菜单</AtIcon>
      </View>
      <View>
        <AtIcon prefixClass="icon" value="icon-dingdan">订单</AtIcon>
      </View>
      <View>
        <AtIcon prefixClass="icon" value="icon-gouwudai">购物袋</AtIcon>
      </View>
      <View>
        <AtIcon prefixClass="icon" value="icon-1">首页</AtIcon>
      </View>
    </View>
  );
}

export function TabBar() {
  return (
    <View className="tabbar-flex">
      {TabsEnum.map((item, index) => {
        return (
          <View key={index}>
            <NavLink to={`${item?.path}`}>
              <i className={`${item?.icon}`}>{item?.name}</i>
            </NavLink>
          </View>
        )
      })
      }
    </View>
  );
}
export class TabComponent extends React.Component {
  render() {
    return (
      <View>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/home" />}
            />
            <Route path="/home" component={Home} />
            <Route path="/my" component={My} />
            <Route path="/menu" component={Menu} />
            <Route path="/ticket" component={Ticket} />
            <Route path="/package" component={ShopPackage}></Route>
            {/* <Route path="/home" exact component={BasicInput} /> */}
            <Redirect to="#/home" />
          </Switch>
          <TabBarExample />
        </BrowserRouter>
      </View>
    )
  }
}