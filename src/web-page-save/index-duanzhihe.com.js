/*
http://www.duanzhihe.com/1154.html
nodejs抓取页面小试

用nodejs写的抓取页面代码，很简单，很久之前写过一个爬图片的……
代码待优化部分，一是有些页面抓取回来的是乱码（优先级较高），另外一个是保存格式，现在保存到txt里没有格式可言

附上代码（改自alsotang的nodejs教程）：

*/


var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var fs = require('fs');
var app = express();
 
superagent.get('https://cnodejs.org/')
.end(function (err, sres) {
    // 常规的错误处理
    if (err) {
        return next(err);
    }
    // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
    // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
    // 剩下就都是 jquery 的内容了
    /*var buf = new Buffer(sres.text, 'binary');
    var str = iconv.decode(buf, 'gb2312');*/
    var $ = cheerio.load(sres.text);
    var items = '';
    $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        items += 'title:' + $element.attr('title') + ',href:' + $element.attr('href') + ',';
    });
 
    fs.writeFile('message.txt', JSON.stringify(items.toString()), function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
});