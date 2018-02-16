var request = require('request')
var url = 'http://tw.shop.com/maso0310/search/htc'
request({url ,headers:{'user-agent':'node.js'} },
  function (err, res, body){
  console.log(body)
})