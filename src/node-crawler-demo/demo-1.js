var Crawler = require("crawler");
var url = require('url');


var c = new Crawler({
    maxConnections: 10,
    jQuery: 'cheerio',
    // This will be called for each crawled page
    callback: function(error, result, $) {
        // console.log(result)
        // console.log($, typeof result, '\n--------', ++count)
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
        // $('a').each(function(index, a) {
        //     var toQueueUrl = $(a).attr('href');
        //     c.queue(toQueueUrl);
        // });

        // $ && console.log($('title').text())
        console.log($('title').text())
    }
});

// Queue a list of URLs
c.queue([
    'http://baike.so.com/doc/2707954-2858984.html',
    'https://zh.wikipedia.org/zh-hans/1963%E5%B9%B4',
    'http://baike.so.com/doc/2844936-3002295.html',
]);
