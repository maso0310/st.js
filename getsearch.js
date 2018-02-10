    var msg = "https://tw.shop.com/maso0310/search";
    var request=require('request');
    var url = msg;
    request(url, function(error,res,body){
      console.log(body);
    

    var cheerio = require('cheerio');
    var $ = cheerio.load(body);

    var result = [];
    $('section.search_resluts > ul#content > div.quickview-btn-box').each(function(){
      result.push($(this).img());
      });
    });