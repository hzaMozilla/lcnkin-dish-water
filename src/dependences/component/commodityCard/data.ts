import testPng from '@src/lib/image/LKResource/menu_noselfservice_popupbgView@2x.png';
type enums = {
  imageUrl: String,
  price: number,
  describe: String,
  original: number,
  reduction: Boolean,
  sold: String
}

export const carInfo: Array<enums> = [
  {
    imageUrl: testPng,
    price: 139,
    describe: '樱花吸管随行杯xxxxxxqqqqq',
    original: 199,
    reduction: true,
    sold: '4000+'
  },
  {
    imageUrl: '@src/lib/image/resource/tedail/2.JPG',
    price: 129,
    describe: 'xxxxxxqqqqq',
    original: 179,
    reduction: true,
    sold: '3000+'
  },
  {
    imageUrl: testPng,
    price: 99,
    describe: '樱花吸管随行杯xxxxxxqqqqq',
    original: 200,
    reduction: true,
    sold: '2000+'
  },
  {
    imageUrl: '@src/lib/image/resource/tedail/3.JPG',
    price: 139,
    describe: '库布其诺奶茶',
    original: 199,
    reduction: true,
    sold: '8000+'
  }
];
