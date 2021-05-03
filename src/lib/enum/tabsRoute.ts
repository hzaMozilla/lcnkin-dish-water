interface enums {
  id: Number,
  icon: String,
  path: String,
  name: String,
  check: Boolean,
  style: Object
}

const TabsEnum: Array<enums> = [
  {
    id: 0,
    icon: 'iconfont icon-1',
    path: '/home',
    name: '首页',
    check: true,
    style: {}
  },
  {
    id: 1,
    icon: 'iconfont icon-Coffee',
    path: '/menu',
    name: '菜单',
    check: false,
    style: {}
  },
  {
    id: 2,
    icon: 'iconfont icon-dingdan',
    path: '/ticket',
    name: '订单',
    check: false,
    style: {}
  },
  {
    id: 3,
    icon: 'iconfont icon-gouwudai',
    path: '/shopPackage',
    name: '购物袋',
    check: false,
    style: {}
  },
  {
    id: 4,
    icon: 'iconfont icon-wode',
    path: '/my',
    name: '我的',
    check: false,
    style: {}
  },
]
export default TabsEnum;