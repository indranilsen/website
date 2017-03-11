var exec = require('child_process').exec;
var fs = require('fs');

let videoList = '../casper/videoList.json';
let target = 'Sirius011196'
let collectorFile = __dirname+'/../casper/collector.js';
let casperCommand = 'casperjs ' + collectorFile + ' --target=' + target;

var videoService = function() {
    var collectVideos = function(req, res) {
        if(!checkObjectFile()) {
            console.log();
            console.log('Does not exist');
            casper()
                .then(function(data) {
                    console.log('**** collectVideos ****\n', data);
                })
                .catch(function(err) {
                    console.log('**** ERROR ****\n', err);
                });
        } else {
            console.log('Exists');
        }
    };

    function casper() {
        return new Promise(function(resolve, reject) {
            exec(casperCommand, function(error, stdout, stderr) {
                if (error) {
                    console.log("Error", error, stderr);
                    reject(stderr);
                }
                resolve(stdout);
            })
        });
    }

    function checkObjectFile() {
        fs.stat(videoList, function(err, stats) {
            if(err) {
                console.log(err);
                return false;
            } else {
                console.log(stat);
                return true;
            }
        })
    }

    return {
        collectVideos: collectVideos
    }
};

module.exports = videoService;
