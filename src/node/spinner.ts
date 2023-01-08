import ora from 'ora';
import { log } from '../log';

export function withOra(
  promiseFn: () => Promise<any>,
  { text, successText, failText, startText }: { text: string; successText: string; failText: string; startText?: string }
) {
  return new Promise((resolve, reject) => {
    const spinner = ora(text).start();
    startText && log.info(startText);

    promiseFn()
      .then((result) => {
        spinner.succeed(`✅ ${successText}`);
        resolve(result);
      })
      .catch((err) => {
        spinner.fail(`❎ ${failText}`);
        reject(err);
      });
  });
}
