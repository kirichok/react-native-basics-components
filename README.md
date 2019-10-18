# react-native-basics-components
A basic components structure helper

## Libraries fixes
 1. Add to `package.json` command on scripts section:
    `"save-lib-src": "node node_modules/react-native-basics-components/scripts/copy.js"`
    
    Then if you added fixes on lib scripts run command for copy this changes, run command in terminal: 
    `npm run save-lib-src ./node_modules/path/to/libs/fixes/(file.js|.gradle|...)`

2. Add to scripts `postinstall` command
    `"postinstall" : "node node_modules/react-native-basics-components/scripts/update.js"`

3. When you run `npm install`, after installation running scripts of copying files to node_modules libraries
