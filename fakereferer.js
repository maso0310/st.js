



var request = require('request');
request({uri:'https://tw.shop.com/maso0310', 
    headers: {referer: 'https://tw.shop.com/maso0310'
    }}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});