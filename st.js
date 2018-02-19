var request = require('request')
var url = "https://tw.shop.com/maso0310/search/htc";
request({url ,headers:{'user-agent':'node.js'} },
function (err, res, body)
{
const cheerio = require('cheerio');
const $ = cheerio.load(body);
const $imgdom = $("div.product-image");
$imgdom.find('img').each(function(index , el) {
var imgurl = $(this).attr("src")
var a = imgurl.substr(0,82)
console.log(a);

})
})