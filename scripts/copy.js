const { createDirIfNotExists, getFileInfo, makeDirectoryTree, updateScriptLists } = require(
  './utils');

const projectDir = process.cwd();
const scriptsDir = projectDir + '/scripts/';
const listDir = scriptsDir + 'list.json';

console.log('scriptsDir: ', scriptsDir);
console.log('list: ', listDir);

run();

function run() {
  createDirIfNotExists(scriptsDir);
  const fileInfo = getFileInfo(process.argv[2]);
  makeDirectoryTree(scriptsDir + fileInfo.dir);
  updateScriptLists(fileInfo, listDir, scriptsDir, projectDir);
}
