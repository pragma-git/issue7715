
/**
 * This code shows the problem with issue #7715 on NWJS, but run inside dev-console of NWJS
 * 
 * Go into folder with package.json, and run below commands.  Time spend is shown in window.
 * 
 * In terminal : /Applications/nwjs_v0.51.0.app/Contents/MacOS/nwjs   --remote-debugging-port=9222
 * 
 * 1) In google chrome :  http://localhost:9222/
 * 2) click on one of the pages
 * 3) and then paste below code into console
 * 
 */




//
// HERE GOES MINIMAL CODE SHOWING NWJS ISSUE #7715 
//

function test(){

    var startTime = performance.now();

    const { exec } = require("child_process")
    let child = exec('echo "$(date +%s%100) (bash time)"', (error, stdout, stderr) => { 
            //console.log(stdout); 
        }
    );

    child.on('close', (code) => {
        console.log(`Close: ${ performance.now() - startTime} ms    code = ${code}`);
    });

}

test()
