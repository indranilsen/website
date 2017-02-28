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
    casper.repeat(1, function() {
        console.log('==>\n');
        var video = JSON.parse(String(videoObj[count]))
        var link = 'https://www.youtube.com' + video.id;
        casper.thenOpen(link, function() {
            var desc = this.evaluate(function() {
                return document.querySelector('#eow-description').innerHTML
            });
            require('utils').dump(desc);
        });
        count++;
    });
});

casper.run(function() {
    this.echo('Completed ...\n');
    for(var i = 0; i<videoObj.length; i++) {
        console.log(JSON.parse(String(videoObj[i])).id);
    }
    console.log('\n\n\n\nTotal: ', videoObj.length);
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
