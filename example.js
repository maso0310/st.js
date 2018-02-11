// 打开详情页
var request = require('request'), cheerio = require('cheerio');

function loadInfo(url){
  request({
    url: "http://v.youku.com/v_show/id_XMTQ3Mzc1MTczNg==.html?from=y1.6-85.3.1.14b31ff68f3311e5a080&x",
    headers: {
      'User-Agent': 'http://v.youku.com/'
    }
  }, function fetch(error, response, body) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(body, {decodeEntities: false});
      
      var video = $('video');
      console.log(video);
    } else {
      console.log('解析 HTML 错误或通讯故障。');
    }
  });
}