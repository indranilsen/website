const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const request = require('request');
const config = require('./casperConfig')();
const videoFile = require('./videoFile.json');

let basePage = 'https://www.youtube.com/user/Sirius011196/videos?view=0&sort=dd&shelf_id=0';
let videoFileLocation = path.resolve(__dirname, 'videoFile.json');

let videos = videoFile.map(function(video, index) {
    return {link: video.link.watch, index: index};
});

let convertToNumber = function(str) {
    return parseInt(str.replace(/[^\d\.\-]/g, ""));
};

let getFormattedDate = function() {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if (date < 10) {
        date = '0'+date;
    }

    if (month < 10) {
        month = '0'+month;
    }

    return `${year}-${month}-${date}`;
}

let determineContentUpdate = function() {
    return new Promise(function(resolve, reject) {
        request(basePage, function(err, res, body) {
            if(err) {
                reject(err);
            }

            if(res.statusCode == 200) {
                let $ = cheerio.load(body);
                let views = $(config.selectors.query.videos + '> div')
                                .each(function(index) {
                                    let currentViews = convertToNumber(
                                        $(this).text().split(' ')[0].trim()
                                    );

                                    let storedViews = convertToNumber(
                                        videoFile[index].views
                                    );

                                    if(storedViews === currentViews) {
                                        videos[index].update = false;
                                    } else {
                                        videoFile[index].views = currentViews;
                                        videos[index].update = true;
                                    }
                                });
                resolve();
            }
        });
    });
};

let filterUpdateList = function() {
    return new Promise(function(resolve, reject) {
        videos = videos.filter(function(video) {
            if(video.update) {
                return video;
            }
        });
        resolve();
    });
};

let updateStatsForEachVideo = function(video) {
    return new Promise(function(resolve, reject) {
        request(video.link, function(err, res, body) {
            if(err) {
                reject(err);
            }

            if(res.statusCode == 200) {
                let $ = cheerio.load(body);
                let likes = $('#watch8-sentiment-actions > span > span:nth-child(1) > button > span').text();
                let dislikes = $('#watch8-sentiment-actions > span > span:nth-child(3) > button > span').text();

                if(likes && dislikes) {
                    likes = convertToNumber(likes);
                    dislikes = convertToNumber(dislikes);
                    let currentLikes = convertToNumber(videoFile[video.index].likes);
                    let currentDislikes = convertToNumber(videoFile[video.index].dislikes);

                    if (likes === currentLikes && dislikes === currentDislikes) {
                        // video has likes and dislikes but they haven't changed
                        resolve();
                    } else {
                        // video has likes and dislikes and the value(s) have changed
                        videoFile[video.index].likes = likes;
                        videoFile[video.index].dislikes = dislikes;

                        resolve();
                    }

                } else {
                    // video has likes and dislikes disabled
                    resolve();
                }
            }

        });
    });
};

let updateStats = function() {
    return Promise.all(videos.map(
        function(video) {
            return updateStatsForEachVideo(video);
        }
    ));
};

let writeToFile = function() {
    return new Promise(function(resolve, reject) {
        fs.stat(videoFileLocation, function(err, stats) {
            if(err) {
                reject(err);
            }

            let data = JSON.stringify(videoFile);

            let newName = path.resolve(
                __dirname,
                path.basename(videoFileLocation, '.json')
            );

            newName = `${newName}_${getFormattedDate()}.json`;

            fs.rename(videoFileLocation, newName, function() {
                fs.writeFile(videoFileLocation, data, function(err) {
                    if(err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });

        });
    });
};

determineContentUpdate()
    .then(filterUpdateList)
    .catch(function(err) {
        console.log('Could not determine content to update: ', err);
    })
    .then(updateStats)
    .catch(function(err) {
        console.log('Could not filter the video list: ', err);
    })
    .then(writeToFile)
    .catch(function(err) {
        console.log('Could not update the video statistics: ', err);
    })
    .then(function() {
        console.log('Update successful!');
    })
    .catch(function(err) {
        console.log('Could not write to file: ', err);
    });
