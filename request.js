var request = require('request');

var url = 'https://tw.shop.com/MASO0310/search/NOTE?credituser=C9675439'
request(url, function(err,res,body){
    console.log(body);
});