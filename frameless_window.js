
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


const delayInMs = 3000;
window.setInterval( _update, delayInMs ); // continuously call _update

async function _update(){

 
    
    console.log(' ');        

    var startTime = performance.now();
    //console.log(Date.now() + ' (start time)');
    
    const { exec } = require("child_process")
    let child = exec('echo "$(date +%s%100) (bash time)"', (error, stdout, stderr) => { 
            //console.log(stdout); 
        }
    );

    child.on('close', (code) => {
        //console.log(Date.now() + ' (child exit time)');
        console.log(`Close: ${ performance.now() - startTime} ms`);
    });

    //console.log(Date.now() + ' (done time)');
    console.log(`Done : ${ performance.now() - startTime} ms`);


    //console.log(`_update took ${ performance.now() - startTime} ms (at _update3)`); 
    document.getElementById('time').innerText = `${ performance.now() - startTime} ms`;
   
        
}
