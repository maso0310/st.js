const url = "https://tw.shop.com/maso0310/search/"+'電腦';
const request = require('request');
//暫存 headers:{referer: 'https://tw.shop.com/'}}
request({url,
  headers:{'referer': 'https://tw.shop.com', 
  'User-Agent': 'node.js'}}
   , function (error, response, body) {
  console.log(body);
  console.log(url);
  
  //把body放進cheerio準備分析
  const cheerio = require('cheerio');
  const $ = cheerio.load(body);
  const result = [];
  $('section.search_resluts > ul#content > div.quickview-btn-box').each(function(){
  result.push($(this).text().split('\n'));
  console.log(result)
});
});