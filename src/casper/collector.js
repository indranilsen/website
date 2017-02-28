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

casper.run(function() {
    this.echo('Complete ...\n');
    console.log(videoObj);
    this.exit();
});

function getVideos(query) {
    var videos = document.querySelectorAll(query);

    return Array.prototype.map.call(videos, function(elem) {
        return JSON.stringify({
            id: elem.querySelector('a').getAttribute('href'),
            name: elem.querySelector('a').getAttribute('title')
        });
    });
}
