import Taro from '@tarojs/taro';
interface MenuButton<T> {
  bottom: T,
  height: T
  left: T
  right: T
  top: T
  width: T
}
interface SystemInfo<N, S> {
  language: S,
  model: S,
  screenHeight: N,
  screenWidth: N,
  statusBarHeight: N,
  system: S,
  windowHeight: N,
  windowWidth: N,
  menuButton: MenuButton<N>
}
let systemInfoAndMenuButton: SystemInfo<number, string>
export function getSyetemInfoAndButtonBounding(): SystemInfo<number, string> {
  console.log(Taro)
  Taro.getSystemInfo({
    success: res => console.log(res)
  })
    .then(res => console.log(res))
  try {
    const buttonBounding: MenuButton<number> = Taro.getMenuButtonBoundingClientRect();
    const systemInfo = Taro.getSystemInfoSync();
    systemInfoAndMenuButton = { ...systemInfo, menuButton: buttonBounding }

  } catch (err) {
    console.error(err)
  }
  return systemInfoAndMenuButton;
}