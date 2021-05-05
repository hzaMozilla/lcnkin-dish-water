export default {
  pages: [
    'pages/menu/components/deliveryAddress/HomeDelivery',
    'pages/menu/components/deliveryAddress/DeliveryAddress',
    'pages/home/index',
    'pages/menu/index',
    'pages/ticket/index',
    'pages/shopPackage/index',
    'pages/my/index',
    'pages/menu/components/deliveryAddress/Indexes',
  ],
  tabBar: {
    custom: false,
    color: "#000000",
    selectedColor: "#363a9d",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./lib/image/icon/home.png",
        selectedIconPath: "./lib/image/icon/selectedHome.png"
      },
      {
        pagePath: "pages/menu/index",
        text: "菜单",
        iconPath: "./lib/image/icon/menu.png",
        selectedIconPath: "./lib/image/icon/selectedMenu.png"
      },
      {
        pagePath: "pages/ticket/index",
        text: "订单",
        iconPath: "./lib/image/icon/pakg.png",
        selectedIconPath: "./lib/image/icon/selectedPakg.png"
      },
      {
        pagePath: "pages/shopPackage/index",
        text: "购物袋",
        iconPath: "./lib/image/icon/cart.png",
        selectedIconPath: "./lib/image/icon/selectedCart.png"
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "./lib/image/icon/my.png",
        selectedIconPath: "./lib/image/icon/selectedMy.png"
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
    navigationBarTitleText: '菜单',
  },
  requiredBackgroundModes: ["audio"],
  // usingComponents: {
  //   "mp-tabbar": 'pages/tabBar/TabBar'
  // }
}
