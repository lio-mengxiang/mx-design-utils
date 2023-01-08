import { spawn } from 'child_process';
import { log } from '../log';

/**
 * spawn优于exec的点
 * 1是在于不用新建shell，减少性能开销
 * 2是没有maxbuffer的限制
 */
export async function execQuick(
  command: string,
  options: {
    cwd?: string;
    time?: boolean;
    silent?: boolean;
  } = {}
): Promise<{ pid: number; code: number; stdout: string; stderr: string }> {
  return new Promise((resolve) => {
    const silent = options.silent !== false;
    const begin = new Date().getTime();
    const result = {
      pid: null,
      code: null,
      stdout: '',
      stderr: '',
    };

    const { stdout, stderr, pid } = spawn(command, {
      cwd: options.cwd,
      shell: true,
    }).on('close', (code) => {
      if (options.time) {
        const end = new Date().getTime();
        const waste = ((end - begin) / 1000).toFixed(2);
        log.info(command, `Command executed in ${waste} ms.`);
      }

      if (code !== 0 && !silent) {
        log.error(command, 'Command executed failed');
      }

      result.code = code;
      resolve(result);
    });

    result.pid = pid;

    stdout.on('data', (data) => {
      const dataStr = data.toString();
      if (!silent) {
        log.info(dataStr);
      }
      result.stdout += dataStr;
    });

    stderr.on('data', (data) => {
      const dataStr = data.toString();
      if (!silent) {
        log.error(dataStr);
      }
      result.stderr += dataStr;
    });
  });
}
