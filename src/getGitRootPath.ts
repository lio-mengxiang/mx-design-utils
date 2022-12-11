import execQuick from './execQuick';

/**
 * git rev-parse --show-toplevel 显示工作区根目录
 * 如果你的根目录没有.git文件夹就会报错
 * 目的是判断是否初始化了本地git
 */
export default function getGitRootPath() {
  return execQuick('git rev-parse --show-toplevel').then((result) => {
    if (!result.stderr) {
      return result.stdout.toString().replace(/\n|\s/g, '');
    }
    return null;
  });
}
