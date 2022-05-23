
/**
 * This code shows the problem with issue #7715 on NWJS, but run from NODE instead of NWJS
 * 
 * Go into folder with package.json, and run below commands.  Time spend is shown in window.
 * 
 * In node : node ~/Documents/Projects/Pragma-git/test_nwjs_slow/run_in_node.js
 * 
 */




//
// HERE GOES NEW CODE SHOWING NWJS ISSUE #7715
//


const delayInMs = 1000;
setInterval( _update, delayInMs ); // continuously call _update

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


   
        
}
