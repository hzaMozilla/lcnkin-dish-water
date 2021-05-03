export default {
  pages: [
    'pages/home/index',
  ],
  subPackages: [
    {
      root: 'pages/menu',
      name: 'menuPack',
      pages: [
        'index',
      ],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTextStyle: 'black',
        navigationStyle: 'custom',
        navigationBarTitleText: '菜单',
      }
    },
    {
      root: 'pages/ticket',
      name: 'orderPack',
      pages: [
        'index',
      ]
    },
    {
      root: 'pages/shopPackage',
      name: 'shopCarPack',
      pages: [
        'index'
      ]
    },
    {
      root: 'pages/my',
      name: 'myPack',
      pages: [
        'index',
      ]
    },
  ],

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
    navigationBarTitleText: '菜单',
  }
}
