var tpl = function (_swig,_ctx,_filters,_utils,_fn
/**/) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<!DOCTYPE html>\n<html>\n<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no\"/>\n<title>Demo</title>\n<style type=\"text/css\">\n\n</style>\n</head>\n<body>\n	<h1>";
_output += _filters["e"](_filters["title"]((((typeof _ctx.pagename !== "undefined" && _ctx.pagename !== null) ? ((typeof _ctx.pagename !== "undefined" && _ctx.pagename !== null) ? _ctx.pagename : "") : ((typeof pagename !== "undefined" && pagename !== null) ? pagename : "")) !== null ? ((typeof _ctx.pagename !== "undefined" && _ctx.pagename !== null) ? ((typeof _ctx.pagename !== "undefined" && _ctx.pagename !== null) ? _ctx.pagename : "") : ((typeof pagename !== "undefined" && pagename !== null) ? pagename : "")) : "" )));
_output += "</h1>\n	<ul>\n	";
(function () {
  var __l = (((typeof _ctx.authors !== "undefined" && _ctx.authors !== null) ? ((typeof _ctx.authors !== "undefined" && _ctx.authors !== null) ? _ctx.authors : "") : ((typeof authors !== "undefined" && authors !== null) ? authors : "")) !== null ? ((typeof _ctx.authors !== "undefined" && _ctx.authors !== null) ? ((typeof _ctx.authors !== "undefined" && _ctx.authors !== null) ? _ctx.authors : "") : ((typeof authors !== "undefined" && authors !== null) ? authors : "")) : "" ), __len = (_utils.isArray(__l) || typeof __l === "string") ? __l.length : _utils.keys(__l).length;
  if (!__l) { return; }
    var _ctx__loopcache07264097856823355 = { loop: _ctx.loop, author: _ctx.author, __k: _ctx.__k };
    _ctx.loop = { first: false, index: 1, index0: 0, revindex: __len, revindex0: __len - 1, length: __len, last: false };
  _utils.each(__l, function (author, __k) {
    _ctx.author = author;
    _ctx.__k = __k;
    _ctx.loop.key = __k;
    _ctx.loop.first = (_ctx.loop.index0 === 0);
    _ctx.loop.last = (_ctx.loop.revindex0 === 0);
    _output += "\n	    <li";
if ((((typeof _ctx.loop !== "undefined" && _ctx.loop !== null && _ctx.loop.first !== undefined && _ctx.loop.first !== null) ? ((typeof _ctx.loop !== "undefined" && _ctx.loop !== null && _ctx.loop.first !== undefined && _ctx.loop.first !== null) ? _ctx.loop.first : "") : ((typeof loop !== "undefined" && loop !== null && loop.first !== undefined && loop.first !== null) ? loop.first : "")) !== null ? ((typeof _ctx.loop !== "undefined" && _ctx.loop !== null && _ctx.loop.first !== undefined && _ctx.loop.first !== null) ? ((typeof _ctx.loop !== "undefined" && _ctx.loop !== null && _ctx.loop.first !== undefined && _ctx.loop.first !== null) ? _ctx.loop.first : "") : ((typeof loop !== "undefined" && loop !== null && loop.first !== undefined && loop.first !== null) ? loop.first : "")) : "" )) { 
_output += " class=\"first\"";

}_output += ">";
_output += _filters["e"]((((typeof _ctx.author !== "undefined" && _ctx.author !== null) ? ((typeof _ctx.author !== "undefined" && _ctx.author !== null) ? _ctx.author : "") : ((typeof author !== "undefined" && author !== null) ? author : "")) !== null ? ((typeof _ctx.author !== "undefined" && _ctx.author !== null) ? ((typeof _ctx.author !== "undefined" && _ctx.author !== null) ? _ctx.author : "") : ((typeof author !== "undefined" && author !== null) ? author : "")) : "" ));
_output += "</li>\n	";
    _ctx.loop.index += 1; _ctx.loop.index0 += 1; _ctx.loop.revindex -= 1; _ctx.loop.revindex0 -= 1;
  });
  _ctx.loop = _ctx__loopcache07264097856823355.loop;
  _ctx.author = _ctx__loopcache07264097856823355.author;
  _ctx.__k = _ctx__loopcache07264097856823355.__k;
  _ctx__loopcache07264097856823355 = undefined;
})();
_output += "\n	</ul>\n	\n	\n</body>\n</html>\n";

  return _output;

};
