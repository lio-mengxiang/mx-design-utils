import download from 'download';
import compressing from 'compressing';
import fs from 'fs-extra';
import print from './print';

const DIR_NAME = './tem@@.zip';
const removeTemDir = () => {
  if (fs.accessSync(DIR_NAME, fs.constants.F_OK)) {
    fs.removeSync(DIR_NAME);
  }
};
/**
 * 下载远程项目模板的方法
 */
export default function downloadTemplate({ url, targetDir = './' }: { url: string; targetDir?: string }): Promise<any> {
  removeTemDir();
  print.info('download start, please wait...');
  // 通过get方法下载
  return download(url)
    .on('end', () => {
      print.success('download done');
    })
    .then((stream) => {
      return compressing.zip.uncompress(stream, DIR_NAME);
    })
    .then(() => {
      return fs.readdirSync(DIR_NAME);
    })
    .then((files) => {
      const realFiles = files.filter((item) => {
        return !item.startsWith('.');
      });
      if ((Array.isArray(realFiles), realFiles[0])) {
        fs.copySync(`${DIR_NAME}/${realFiles[0]}`, targetDir);
      } else {
        print.error('no dir exist');
      }
    })
    .then(() => {
      removeTemDir();
    })
    .catch((err) => {
      print.error(err);
    });
}
