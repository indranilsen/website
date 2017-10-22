var casper = require('casper').create();
var x = require('casper').selectXPath;

var config = require('casperConfig')();

var videoObj = [];
var target;

if (Object.keys(casper.cli.options) === 0) {
    casper.echo('No search target specified.').exit();
} else {
    if(casper.cli.options.target) {
        target = casper.cli.options.target;
    } else {
        casper.echo('Invalid traget.').exit();
    }
}

casper.userAgent(config.vars.userAgent);

casper.start(config.vars.targetPage+target);

casper.thenClick(x(config.selectors.xPath.uploads));

casper.then(function() {
    videoObj = this.evaluate(getVideos, config.selectors.query.videos);
});

casper.then(function() {
    var count = -1;
    casper.repeat(videoObj.length, function() {
        count++;
        var video = JSON.parse(String(videoObj[count]))
        var link = 'https://www.youtube.com' + video.id;
        casper.thenOpen(link, function() {
            this.waitForSelector('#eow-description',function(){
                var desc = this.evaluate(function() {
                    return document.querySelector('#eow-description').innerHTML;
                });
                var vote = this.evaluate(function() {
                    var likes = document.querySelector('#watch8-sentiment-actions > span > span:nth-child(1) > button > span').innerHTML;
                    var dislikes = document.querySelector('#watch8-sentiment-actions > span > span:nth-child(3) > button > span').innerHTML;
                    return likes+':'+dislikes;
                });
                var datePublished = this.evaluate(function() {
                    return document.querySelector('#watch-uploader-info > strong').innerHTML;
                });

                var re = /(<([^>]+)>)/ig;
                video.description = String(desc).replace(re, '\n');
                video.likes = String(vote).split(':')[0];
                video.dislikes = String(vote).split(':')[1];
                video.datePublished = String(datePublished).substr(('Published on ').length, String(datePublished).length);

                var vid = video.id;
                var watchVid = 'https://www.youtube.com' + vid;
                vid = vid.slice('watch?v='.length + 1, vid.length);
                var embedVid = 'https://www.youtube.com/embed/' + vid + '?ecver=1';
                var shareVid = 'https://youtu.be/' + vid;

                var imgBase = 'api://img.youtube.com/vi/';
                var imgMd = imgBase + vid + '/mqdefault.jpg';      // 320x180
                var imgHq = imgBase + vid + '/hqdefault.jpg';      // 480x360
                var imgSd = imgBase + vid + '/sddefault.jpg';      // 640x480
                var imgMax = imgBase + vid + '/maxresdefault.jpg'; // 1920x1080

                video.id = vid;
                video.views = video.views.split(' ')[0];
                video.link = {
                    watch: watchVid,
                    embed: embedVid,
                    share: shareVid
                };
                video.image = {
                    medium: imgMd,
                    high: imgHq,
                    standard: imgSd,
                    maxres: imgMax
                };

                videoObj[count] = JSON.stringify(video);

                this.thenClick('#action-panel-overflow-button', function() {
                    this.waitForSelector('#action-panel-overflow-menu', function() {
                        var statsButton = '#action-panel-overflow-menu > li:nth-child(3) > button';
                        var statsExists = this.evaluate(function() {
                            if(document.querySelector('#action-panel-overflow-menu > li:nth-child(3) > button > span').innerHTML === 'Statistics') {
                                return true;
                            } else {
                                return false;
                            }
                        });
                        if(statsExists) {
                            this.thenClick('#action-panel-overflow-menu > li:nth-child(3) > button', function() {
                                this.waitForSelector('#watch-action-panels', function() {
                                    this.wait(1000, function() {
                                        this.thenClick('#watch-actions-stats > table > tbody > tr > td.stats-bragbar.stats-bragbar-watch-time.yt-uix-button.yt-uix-tabs-tab', function() {
                                            var video = JSON.parse(String(videoObj[count]));
                                            var timeWatched = this.evaluate(function() {
                                                return document.querySelector('#watch-actions-stats > table > tbody > tr > td.stats-bragbar.stats-bragbar-watch-time.yt-uix-button.yt-uix-tabs-tab.yt-uix-tabs-selected.yt-uix-button-toggled > div').innerText;
                                            });
                                            var avgTimeWatched = this.evaluate(function() {
                                                return document.querySelector('#stats-chart-tab-watch-time > span > span.menu-metric-value').innerHTML;
                                            });
                                            var subsDriven = this.evaluate(function() {
                                                return document.querySelector('#watch-actions-stats > table > tbody > tr > td.stats-bragbar.stats-bragbar-subscribers.yt-uix-button.yt-uix-tabs-tab > div').innerHTML;
                                            });
                                            var shares = this.evaluate(function() {
                                                return document.querySelector('#watch-actions-stats > table > tbody > tr > td.stats-bragbar.stats-bragbar-shares.yt-uix-button.yt-uix-tabs-tab > div').innerHTML;
                                            });

                                            video.timeWatched = timeWatched;
                                            video.subsDriven = subsDriven;
                                            video.shares = shares;

                                            videoObj[count] = JSON.stringify(video);

                                        });
                                    });
                                }, function() {
                                }, 1000);
                            })
                        }
                    }, function() {
                    }, 3000);
                });
            }, function() {
            }, 3000);
        });
    });
});

casper.run(function() {
    console.log('['+videoObj+']');
    this.exit();
});

function getVideos(query) {
    var videos = document.querySelectorAll(query);

    return Array.prototype.map.call(videos, function(elem) {
        return JSON.stringify({
            id: elem.querySelector('h3 > a').getAttribute('href'),
            title: elem.querySelector('h3 > a').getAttribute('title'),
            views: elem.querySelector('div > ul > li:nth-child(1)').innerHTML,
            uploadDate: elem.querySelector('div > ul > li:nth-child(2)').innerHTML
        });
    });
}
