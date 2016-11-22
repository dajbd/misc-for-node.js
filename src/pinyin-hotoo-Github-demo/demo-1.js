var pinyin = require("pinyin");

console.log(pinyin("中心"));    // [ [ 'zhōng' ], [ 'xīn' ] ]
console.log(pinyin("中心", {
  heteronym: true               // 启用多音字模式
}));                            // [ [ 'zhōng', 'zhòng' ], [ 'xīn' ] ]
console.log(pinyin("中心", {
  heteronym: true,              // 启用多音字模式
  // segment: true                 // 启用分词，以解决多音字问题。
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
