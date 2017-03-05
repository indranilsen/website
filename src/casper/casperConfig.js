var config = function() {

    var vars = {
        userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36'
                    + '(KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36',
        targetPage: 'https://www.youtube.com/user/'
    };

    var selectors = {
        xPath: {
            uploads: '//*[@id="browse-items-primary"]/li[1]/div[1]/div/div/div/div[1]/h2/a[1]'
        },
        query: {
            videos: '#channels-browse-content-grid > li > div > div.yt-lockup-dismissable > div.yt-lockup-content',
            description: '#eow-description'
        }
    };

    return {
        vars: vars,
        selectors: selectors
    };
};

module.exports = config;
