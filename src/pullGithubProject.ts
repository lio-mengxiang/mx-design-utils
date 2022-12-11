import fs from 'fs-extra';
import enquirer from 'enquirer';
import downloadTemplate from './download';
import print from './print';

type IRepo = {
  owner: string;
  name: string;
  branch: string;
};
type IAnswers = IRepo & {
  targetDir?: string;
};
function githubDownloadUrl(repo: IRepo) {
  return 'https://github.com/' + repo.owner + '/' + repo.name + '/archive/refs/heads/' + repo.branch + '.zip';
}
const questions = [
  {
    type: 'input', // type为交互的类型
    name: 'owner', // 产生的值的key，比如你输入''
    message: '请输入仓库的创建者(example: "lio-mengxiang")', // 提示语
    default: 'lio-mengxiang',
    validate(val) {
      if (!val) {
        return '请输入文件名'; // 验证一下输入是否不为空
      }
      if (fs.accessSync(val, fs.constants.F_OK)) {
        return '文件已存在'; // 判断文件是否存在
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'name',
    message: '请输入仓库名称(example: "react")',
    default: 'react-pnpm-monorepo-subTemplate',
    validate(val) {
      if (!val) {
        return '请输入仓库名'; // 验证一下输入是否不为空
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'branch',
    message: '请输入分支名(example: "main")',
    default: 'main',
    validate(val) {
      if (!val) {
        return '请输入分支名'; // 验证一下输入是否不为空
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'targetDir',
    message: '请输入放文件的目录(默认当前目录: "./")',
    default: './',
  },
];

enquirer
  .prompt(questions)
  .then((answers: IAnswers) => {
    // 获取用户输入值
    const owner = answers.owner;
    const name = answers.name;
    const branch = answers.branch;
    const targetDir = answers.targetDir;
    downloadTemplate({ url: githubDownloadUrl({ owner, name, branch }), targetDir });
  })
  .catch((err) => {
    print.error(err);
    process.exit(1);
  });
