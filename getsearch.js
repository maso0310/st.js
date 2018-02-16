var url = "https://tw.shop.com/maso0310/search/"+'電腦';
var request = require('request');
request({url, headers: {'referer': 'https://tw.shop.com/','User-Agent': 'node.js'}}, 
  function (error, response, body) {
    console.log(body);
    console.log(url)
});