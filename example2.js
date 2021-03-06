var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '機器人',
  channelSecret: '6baf8c3075c7c10d98b7f1d4afcf2146',
  channelAccessToken: '295PO7c2FbLmq2jHznxmISTQciVcWy7DnEIArWCgSUKWPsorlKbbuRURYIYxWZYJXjlQ2Wj9Ik8nwuAz2qB2rc4EfKN56kdvBERkjx7F1OOPsjx8cdCNGhoLQtVfAR+TrFsuw73JsEKI2IA9gE719gdB04t89/1O/w1cDnyilFU='
});
  // 使用 Request Promise 發送自定義的訊息
const request = require('request-promise');

// Line Bot 的 Channel Token
const lineBotToken = '...';

// 收到 User Request 時要發回給 User 的訊息放這裡
router.post('/webhooks', function *(ctx,  next) {
  // User 給 Bot 的訊息是一個 Array
  const userMessages = ctx.request.body.events;
  
  // 準備回覆給 User 的訊息
  let replyMessages = [];
  replyMessages = userMessages.map((currentReplyMessages, userMessage) => {
    // 等下放我們要回給 User 的訊息，一次最多 5 則
    let messages;

    // User 傳來的訊息型態
    if ( userMessage.type === 'message' ) {
      messages = [
        {type: 'text', text: '你成功了！我回你就是了'},
        {type: 'image', originalContentUrl: 'http://i.imgur.com/xjTET8v.jpg', previewImageUrl: 'https://sdl-stickershop.line.naver.jp/stickershop/v1/product/1179553/iphone/main@2x.png'},
      ];
      
    }
    else {
      messages = [{type: 'text', text: '收到囉！'}];
    }
    
    // request 的 options
    let options = {
        method: 'POST',
        uri: 'https://api.line.me/v2/bot/message/reply',
        // 客制化 headers 內容，主要告訴 Line 收到的訊息格式和 Line Bot 的 Token
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${lineBotToken}`,
        },
        body: {
          // 告訴 Line 這個訊息回覆給誰
          replyToken: userMessage.replyToken,
          messages: messages,
        },
        json: true,
      };

    return request(options);
  });
  
  // 訊息處理好就等待所有 Request 發送出去
  yield Promise.all( replyMessages );
  
})