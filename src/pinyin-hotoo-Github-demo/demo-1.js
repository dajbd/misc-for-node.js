var pinyin = require("pinyin");

console.log(pinyin("中心"));    // [ [ 'zhōng' ], [ 'xīn' ] ]
console.log(pinyin("中心", {
  heteronym: true               // 启用多音字模式
}));                            // [ [ 'zhōng', 'zhòng' ], [ 'xīn' ] ]
console.log(pinyin("中心", {
  heteronym: true,              // 启用多音字模式
  // segment: true                 // 启用分词，以解决多音字问题。
  // 多音字、分词等功能，依赖的模块很多，在windows安装那些东西有些麻烦
  // 暂时不启用此功能
  // 参考 https://cnodejs.org/topic/510a98acdf9e9fcc58ee157b
  // 文中说到的依赖：.net framework 4.5.1, python 2.7 等

}));                            // [ [ 'zhōng' ], [ 'xīn' ] ]
console.log(pinyin("中心", {
  style: pinyin.STYLE_INITIALS, // 设置拼音风格
  heteronym: true
}));                            // [ [ 'zh' ], [ 'x' ] ]



console.log(pinyin("中心银行，我看行。中国移动，还可以。", {
  style: pinyin.STYLE_NORMAL, // 设置拼音风格
  heteronym: false
}));
// 上面的句子，关闭了多音字模式,得出的结果，很多多音字存在问题。
/*
[ [ 'zhong' ],
  [ 'xin' ],
  [ 'yin' ],
  [ 'hang' ],
  [ '，' ],
  [ 'wo' ],
  [ 'kan' ],
  [ 'hang' ],
  [ '。' ],
  [ 'zhong' ],
  [ 'guo' ],
  [ 'yi' ],
  [ 'dong' ],
  [ '，' ],
  [ 'huan' ],
  [ 'ke' ],
  [ 'yi' ],
  [ '。' ] ]
*/
