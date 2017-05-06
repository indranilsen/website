var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

let videoFile = path.resolve(__dirname+'/../casper/videoFile.json');
let target = 'Sirius011196'
let collectorFile = path.resolve(__dirname+'/../casper/collector.js');
let casperCommand = 'casperjs ' + collectorFile + ' --target=' + target;

var videoService = function() {
    var collectVideos = function(req, res) {
        return new Promise(function(resolve, reject) {
            checkVideoFile().then(function(fileExists) {
                if(!fileExists) {
                    casper()
                        .then(writeVideoFile)
                        .catch(function(err) {
                            reject(err);
                        })
                        .then(function() {
                            resolve(require(videoFile));
                        });
                } else {
                    resolve(require(videoFile));
                }
            });
        });
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
        return new Promise(function(resolve, reject) {
            fs.stat(videoFile, function(err, stats) {
                if(err) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        });
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
