import execQuick from './execQuick';
import getGitRootPath from './getGitRootPath';
import print from './print';

export default async function checkGitRemote() {
  if (getGitRootPath()) {
    const { code, stdout } = await execQuick('git remote -v');
    if (code === 0 && stdout.match('(push)')) {
      print();
    } else {
      print.error(['publish'], '在指定 git remote 前，您无法发布代码，请手动添加 git remote。');
      process.exit(1);
    }
  } else {
    print.error(['publish'], '没有检测到 Git 仓库。');
    process.exit(1);
  }
}
