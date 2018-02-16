const request=require('request')
const url ='https://tw.shop.com/maso0310/search/電腦'
  request({url, headers:{'user-agent':'node.js'}},
    function(err,res,body){
  console.log(body);
  console.log(url);

});