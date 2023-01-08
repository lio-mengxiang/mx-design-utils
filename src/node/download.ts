import download from 'download';
import compressing from 'compressing';
import { log } from '../log';

/**
 * 下载远程项目模板的方法
 */
export function downloadTemplate({ url, targetDir = './' }: { url: string; targetDir?: string }): Promise<any> {
  log.info('download start, please wait...');
  // 通过get方法下载
  return download(url, targetDir)
    .on('end', () => {
      log.success('download done');
    })
    .then((stream) => {
      return compressing.zip.uncompress(stream, './');
    })
    .catch((err) => {
      log.error(err);
    });
}
