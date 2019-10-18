const { readFile, copyFile, replacePWDByProjectDir } = require('./utils');

const projectDir = process.cwd();
const scriptsDir = projectDir + '/scripts/';
const listDir = scriptsDir + 'list.json';

run();

function run() {
  const list = readFile(listDir);
  for (let lib in list) {
    if (list.hasOwnProperty(lib)) {
      list[lib].forEach(file => {
        copyFile(
          replacePWDByProjectDir(file.src, projectDir),
          replacePWDByProjectDir(file.dst, projectDir),
        );
      });
    }
  }
  console.log('Files copied');
}
