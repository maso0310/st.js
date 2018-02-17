var request = require('request')
var url = 'http://tw.shop.com/maso0310/search/htc'
request({url ,headers:{'user-agent':'node.js'} },
  function (err, res, body)
  {
  const cheerio = require('cheerio');
  const $ = cheerio.load(body);
  let shop = []
  $('div.product-image')
  .each(function(i, elem) {
  shop.push($(this).text())
  console.log(shop)
})
})
