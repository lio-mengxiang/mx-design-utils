interface IDebounced<T extends (...args: any) => any> {
  cancel: () => void;
  (...args: any[]): ReturnType<T>;
}

export function debounce<T extends (...args: any) => any>(func: T, wait: number, immediate?: boolean): IDebounced<T> {
  let timeout: NodeJS.Timeout | null;
  let result: any;

  const debounced: IDebounced<T> = function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        result = func.apply(context, args);
      }, wait);
    }
    // Only the first time you can get the result, that is, immediate is true
    // if not，result has little meaning
    return result;
  };

  debounced.cancel = function () {
    clearTimeout(timeout!);
    timeout = null;
  };

  return debounced;
}
