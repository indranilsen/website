var casper = require('casper').create();
var x = require('casper').selectXPath;

var config = require('casperConfig')();

var videoObj = [];

casper.userAgent(config.vars.userAgent);

casper.start(config.vars.targetPage, function() {
    this.echo(this.getTitle())
});

casper.thenClick(x(config.selectors.xPath.uploads), function() {
    console.log('Clicked Uploads');
});

casper.then(function() {
    videoObj = this.evaluate(getVideos, config.selectors.query.videos);
});

casper.then(function() {
    var count = 0;
    casper.repeat(videoObj.length, function() {
        console.log(count);
        console.log('==>\n');
        var video = JSON.parse(String(videoObj[count]))
        var link = 'https://www.youtube.com' + video.id;
        casper.thenOpen(link, function() {
            this.waitForSelector('#eow-description',function(){
                this.echo('selector');
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
                count++;
            }, function() {
                this.echo('Timout');
            }, 3000);
        });
    });
});

casper.run(function() {
    this.echo('Completed ...\n');
    for(var i = 0; i<videoObj.length; i++) {
        console.log(JSON.parse(String(videoObj[i])).id), JSON.parse(String(videoObj[i])).description;
    }
    console.log('\n\n\n\nTotal: ', videoObj.length);
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
