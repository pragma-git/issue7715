
/**
 * This code shows the problem with issue #7715 on NWJS -- version 2, showing that a child process is the problem
 * 
 * Go into folder with package.json, and run below commands.  Time spend is shown in window.
 * 
 * Slow : /Applications/nwjs_v0.51.0.app/Contents/MacOS/nwjs   --remote-debugging-port=9222 .
 * Fast : /Applications/nwjs_v0.50.3.app/Contents/MacOS/nwjs   --remote-debugging-port=9222 .
 * 
 */


// INIT WINDOW
var gui = require("nw.gui");

window.onload = function() {

    document.getElementById("close-window-button").onclick = function() {
        window.close();
    };
    gui.Window.get().show();
};


//
// HERE GOES NEW CODE SHOWING NWJS ISSUE #7715
//


var startTime = performance.now();

const { exec } = require("child_process")
exec('git')


console.log(' ');
console.log(`_update took ${ performance.now() - startTime} ms (at _update3)`); 
document.getElementById('time').innerText = `${ performance.now() - startTime} ms`;
