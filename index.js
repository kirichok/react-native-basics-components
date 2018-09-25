'use strict';

const Classes = {
    get Utils() {
        return require('./utils');
    },
    get Screen() {
        return require('./src/Screen').Screen;
    },
    get KeyboardAvoidingView() {
        return require('./src/Keyboard/AvoidingView').KeyboardAvoidingView;
    },
    get ScrollIfNeedView() {
        return require('./src/ScrollIfNeedView').ScrollIfNeedView;
    },

};

module.exports = Classes;
