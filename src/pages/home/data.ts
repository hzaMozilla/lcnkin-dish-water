import things from '@src/lib/image/resource/home/swiper/things.jpg';
import Sundae from '@src/lib/image/resource/home/swiper/sundae.jpg';
import Prize from '@src/lib/image/resource/home/swiper/prize.jpg';
import Coffee from '@src/lib/image/resource/home/swiper/coffee.jpg';
import CherryBlossoms from '@src/lib/image/resource/home/swiper/cherry-blossoms.jpg';

import Activity from '@src/lib/image/resource/home/activity/activity.png';
import CollectCoupons from '@src/lib/image/resource/home/activity/collect-coupons.png';
import Fashion from '@src/lib/image/resource/home/activity/fashion.png';
import Gift from '@src/lib/image/resource/home/activity/gift.png';
import Other from '@src/lib/image/resource/home/activity/other.png';
import Invitation from '@src/lib/image/resource/home/activity/invitation.png';

export type swiperInfoSetenums = {
  imageUrl: string,
  jumpUrl: string,
}
export type activityInfoSet = {

}
export const swiperInfoSet: Array<swiperInfoSetenums> = [
  {
    imageUrl: Coffee,
    jumpUrl: '',
  },
  {
    imageUrl: CherryBlossoms,
    jumpUrl: '',
  },
  {
    imageUrl: Prize,
    jumpUrl: '',
  },
  {
    imageUrl: things,
    jumpUrl: '',
  },
  {
    imageUrl: Sundae,
    jumpUrl: '',
  },
];

type param = {
  imageUrl: string,
  jumpUrl: string,
}

interface activitySet {
  activity: param,
  collectCoupons: param,
  fashion: param;
  gift: param;
  other: param;
  invitation: param;
}
export const activityInfoSet: activitySet = {
  activity: {
    imageUrl: Activity,
    jumpUrl: '',
  },
  collectCoupons: {
    imageUrl: CollectCoupons,
    jumpUrl: '',
  },
  fashion: {
    imageUrl: Fashion,
    jumpUrl: '',
  },
  gift: {
    imageUrl: Gift,
    jumpUrl: '',
  },
  other: {
    imageUrl: Other,
    jumpUrl: '',
  },
  invitation: {
    imageUrl: Invitation,
    jumpUrl: '',
  }
};
