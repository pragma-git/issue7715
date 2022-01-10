
/**
 * This code shows the problem with issue #7715 on NWJS
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


const simpleGit = require('simple-git');  // npm install simple-git

const delayInMs = 1000;
window.setInterval( _update, delayInMs ); // continuously call _update

async function _update(){
    
        var startTime = performance.now();
        
        var isRepo;
        await simpleGit().checkIsRepo(onCheckIsRepo);
        function onCheckIsRepo(err, checkResult) { 
            isRepo = checkResult
            console.log(' ');
            console.log(`_update took ${ performance.now() - startTime} ms (at onCheckIsRepo)`); 
            document.getElementById('time').innerText = `${ performance.now() - startTime} ms`;
        }
        
        
}
