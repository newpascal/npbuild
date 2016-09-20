const fs = require('fs');
var concat = require('concat-files');

// check file
fs.accessSync('freepascal\\fpcsrc\\utils\\fpcmkcfg\\fpc.cft', fs.F_OK);

concat(['freepascal\\fpcsrc\\utils\\fpcmkcfg\\fpc.cft', 'np.cft'], 'freepascal\\fpc\\fpc.cft');