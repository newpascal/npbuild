const fs = require('fs');
var concat = require('concat-files');

// check file
fs.accessSync('newpascal\\fpcsrc\\utils\\fpcmkcfg\\fpc.cft', fs.F_OK);

concat(['newpascal\\fpcsrc\\utils\\fpcmkcfg\\fpc.cft', 'np.cft'], 'newpascal\\fpc\\fpc.cft');