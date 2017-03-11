var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

let videoFile = path.resolve(__dirname+'/../casper/videoFile.json');
let target = 'Sirius011196'
let collectorFile = path.resolve(__dirname+'/../casper/collector.js');
let casperCommand = 'casperjs ' + collectorFile + ' --target=' + target;

var videoService = function() {
    var collectVideos = function(req, res) {
        if(!checkVideoFile()) {
            console.log();
            console.log('Does not exist');
            casper()
                .then(writeVideoFile)
                .then(function(){
                    console.log("DONE");
                })
                .catch(function(err) {
                    console.log(err);
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

    function checkVideoFile() {
        fs.stat(videoFile, function(err, stats) {
            if(err) {
                console.log(err);
                return false;
            } else {
                console.log(stat);
                return true;
            }
        })
    }

    function writeVideoFile(data) {
        return new Promise(function(resolve, reject) {
            fs.writeFile(videoFile, data, function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    return {
        collectVideos: collectVideos
    }
};

module.exports = videoService;
