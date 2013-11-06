// Requires
var _ = require('underscore');

var path = require('path');
var cp = require('child_process');

// Codebox bin path
function binPath() {
    return path.join(path.dirname(module.filename), 'codebox.js');
}

// Fork file
function spawnBin() {
    var p = cp.spawn(binPath(), [], {
        env: _.defaults({
            'WORKSPACE_DIR': '/Users/aaron/git/wapp'
        }, process.env)
    });

    // Pipe
    p.stdout.pipe(process.stdout);
    p.stderr.pipe(process.stderr);
    process.stdin.pipe(p.stdin);

    p.on('close', function(exitCode) {
        process.exit(exitCode);
    });
}


function main() {
    spawnBin();
}

// do
main();
