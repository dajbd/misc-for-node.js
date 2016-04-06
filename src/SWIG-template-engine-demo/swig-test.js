var swig = require('swig');
var template = swig.compileFile('demos/1-basic.html');
var output = template({
    pagename: 'awesome people',
    authors: ['Paul', 'Jim', 'Jane']
});

console.log(output)
