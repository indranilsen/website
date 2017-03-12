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
    var count = 3;
    casper.repeat(2, function() {
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

                video.description = desc;
                video.likes = String(vote).split(':')[0];
                video.dislikes = String(vote).split(':')[1];
                videoObj[count] = JSON.stringify(video);

                this.thenClick('#action-panel-overflow-button', function() {
                    this.waitForSelector('#action-panel-overflow-menu', function() {
                        this.thenClick('#action-panel-overflow-menu > li:nth-child(3) > button', function() {
                            this.waitForSelector('#watch-action-panels', function() {
                                this.wait(1000, function() {
                                    this.capture('test.png');
                                    this.thenClick('#watch-actions-stats > table > tbody > tr > td.stats-bragbar.stats-bragbar-watch-time.yt-uix-button.yt-uix-tabs-tab', function() {
                                        var video = JSON.parse(String(videoObj[count]));
                                        var timeWatched = this.evaluate(function() {
                                            return document.querySelector('#watch-actions-stats > table > tbody > tr > td.stats-bragbar.stats-bragbar-watch-time.yt-uix-button.yt-uix-tabs-tab.yt-uix-tabs-selected.yt-uix-button-toggled > div').innerHTML;
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

                                        var timeWatchedVal = String(timeWatched).split(' ')[0];
                                        var timeWatchedUnit = String(timeWatched).split(' ')[1].slice(4, (String(timeWatched).length)-5);

                                        video.timeWatched = timeWatchedVal+' '+timeWatchedUnit;
                                        video.subsDriven = subsDriven;
                                        video.shares = shares;

                                        videoObj[count] = JSON.stringify(video);

                                    });
                                });
                            }, function() {
                            }, 1000);
                        });
                    }, function() {
                    }, 3000);
                });
                count++;
            }, function() {
            }, 3000);
        });
    });
});

casper.run(function() {
    console.log(videoObj);
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
