var request = require('request')
var url = 'http://tw.shop.com/maso0310/search/htc'
request({url ,headers:{'user-agent':'node.js'} },
  function (err, res, body){
  console.log(body)
})

const cheerio = require('cheerio')
// 把 body 放進 cheerio 準備分析
const $ = cheerio.load(body)
let shop = []
$('section.search_resluts > ul#content > div.quickview-btn-box').each(function(i, elem) {
  shop.push($(this).text().split('\n'))
})
console.log(shop)