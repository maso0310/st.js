var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '機器人',
  channelSecret: '6baf8c3075c7c10d98b7f1d4afcf2146',
  channelAccessToken: '295PO7c2FbLmq2jHznxmISTQciVcWy7DnEIArWCgSUKWPsorlKbbuRURYIYxWZYJXjlQ2Wj9Ik8nwuAz2qB2rc4EfKN56kdvBERkjx7F1OOPsjx8cdCNGhoLQtVfAR+TrFsuw73JsEKI2IA9gE719gdB04t89/1O/w1cDnyilFU='
});

//事件發生:用戶傳遞訊息，喚醒LINE BOT
bot.on('message', function(event) {
  //事件訊息屬性判定，是否為文字
  if (event.message.type = 'text')  {
    //設定要搜尋的網址頁面與用戶訊息之關聯，還不知道怎麼做
    //跟網頁要資料，取得整個網頁"body"


    const url = "https://tw.shop.com/maso0310/search/"+'電腦';
    const request = require('request');
    //暫存 headers:{referer: 'https://tw.shop.com/'}}
    request({url,
      headers:{referer: 'https://tw.shop.com', 
      UserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36'}}
       , function (error, response, body) {
      console.log(body);
      console.log(url);
      
      //把body放進cheerio準備分析
      const cheerio = require('cheerio');
      const $ = cheerio.load(body);
      const result = [];
      $('section.search_resluts > ul#content > div.quickview-btn-box').each(function(){
      result.push($(this).text().split('\n'));
      console.log(result)
    });
    });

  //收到文字訊息時，直接把收到的訊息傳回去
    event.reply(result).then(function(data) {
      // 傳送訊息成功時，可在此寫程式碼 
      console.log(event.message.text);
    }).catch(function(error) {
      // 傳送訊息失敗時，可在此寫程式碼 
      console.log('錯誤產生，錯誤碼：'+error);
    });
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log('目前的port是', port);
});