const process = require('child_process');

const yargs = require('yargs')
const argv = yargs.argv;
const cmd = argv._[0];
console.log(argv, cmd)

function main() {
    switch (cmd) {
        case 'dev':
            process.exec('npm run dev:vue-ts',
                function (error, stdout, stderr) {
                    if (error !== null) {
                        console.log('exec error: ' + error);
                    }
                });
    }
}
main()