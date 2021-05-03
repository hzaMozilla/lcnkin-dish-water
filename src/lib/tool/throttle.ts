type options = {
  begin: Boolean,
  end: Boolean
}
export function throttle(func: any, wait: number, options: options): Function {
  console.log(11);
  let _t: any, _p: number = 0;
  return function () {
    let now: number = +new Date();
    let remain: number = wait - (now - _p);
    if (remain < 0) {
      if (_p === 0 && !options.begin) {
        _p = now
        return
      }
      if (_t) {
        clearTimeout(_t)
        _t = null
      }
      _p = now
      func.call(this, arguments)
    } else if (!_t && options.end) {
      console.log(22);
      _t = setTimeout(() => {
        console.log(33);
        func.call(this, arguments)
        _t = null
      }, wait)
    }
  }
}