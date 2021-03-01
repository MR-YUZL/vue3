export function uniqueArr(arr) { //去重
    return Array.from(new Set(arr))
}

// export function throttle(fn, gapTime) { //节流
//     let _lastTime = null;
//     return function () {
//         let _nowTime = +new Date();
//         if (_nowTime - _lastTime > gapTime || !_lastTime) {
//             fn.apply(this);
//             _lastTime = _nowTime;
//         }
//     };
// }

// export function debounce(fn, delay) {
//     let timer = null
//     return function () {
//         if (timer) {
//             clearTimeout(timer)
//         }
//         timer = setTimeout(fn, delay)
//     }
// }

export function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = [...arguments];
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait);
    }
}

export function throttle(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                console.log('args',args)
                func.apply(context, args)
            }, wait)
        }
    }
}