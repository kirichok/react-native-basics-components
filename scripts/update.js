const {readFile, copyFile} = require('./utils');

const projectDir = process.cwd();
const scriptsDir = projectDir + '/scripts/';
const listDir = scriptsDir + 'list.json';

run();

function run() {
    const list = readFile(listDir);
    for (let lib in list) {
        if (list.hasOwnProperty(lib)) {
            list[lib].forEach(file => {
                copyFile(file.src, file.dst);
            });
        }
    }
    console.log('Files copied');
}
