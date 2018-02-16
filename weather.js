var request = require("request");
var pm25 = function() {
    request({
      url: "https://tw.shop.com/maso0310/search/電腦",
      method: "GET",headers:{'user-agent':'node.js'}
    }, function(error, response, body) {
      console.log(body)
    });
  };