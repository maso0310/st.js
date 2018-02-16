    var msg = "https://tw.shop.com/maso0310/search/"+event.message.text;
    var request = require('request');
    var cheerio = require('cheerio');
    request(msg, {headers: {'referer': 'https://tw.shop.com', 'user-agent': 'node.js'}, 
    function(error, response, body){
      console.log(body);
      console.log(msg);
      console.log('錯誤產生，錯誤碼：'+error);
    });