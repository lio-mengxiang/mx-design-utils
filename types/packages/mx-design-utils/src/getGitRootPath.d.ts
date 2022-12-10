/**
 * git rev-parse --show-toplevel 显示工作区根目录
 * 如果你的根目录没有.git文件夹就会报错
 * 目的是判断是否初始化了本地git
 */
declare const _default: () => Promise<string>;
export default _default;
