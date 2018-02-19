  
//橫向捲軸
  event.reply({
    type: 'template',
    altText: 'this is a carousel template',
    template: {
      type: 'carousel',
      columns: [{
        thumbnailImageUrl: 'https://img.shop.com/Image/images/shopcom/shop-com-1200x630.jpg?_ignore=',
        title: 'this is menu',
        text: 'description',
        actions: [{
          type: 'postback',
          label: 'Buy',
          data: 'action=buy&itemid=111'
        }, {
          type: 'postback',
          label: 'Add to cart',
          data: 'action=add&itemid=111'
        }, {
          type: 'uri',
          label: 'View detail',
          uri: 'http://example.com/page/111'
        }]
      }, {
        thumbnailImageUrl: 'https://img.shop.com/Image/images/shopcom/shop-com-1200x630.jpg?_ignore=',
        title: 'this is menu',
        text: 'description',
        actions: [{
          type: 'postback',
          label: 'Buy',
          data: 'action=buy&itemid=222'
        }, {
          type: 'postback',
          label: 'Add to cart',
          data: 'action=add&itemid=222'
        }, {
          type: 'uri',
          label: 'View detail',
          uri: 'http://example.com/page/222'
        }]
      }]
    }
  })

  //imagemap
  event.reply({
    type: 'imagemap',
    baseUrl: "https://img.shop.com/Image/images/shopcom/shop-com-1200x630.jpg?_ignore=",
    altText: '你想找的商品資訊',
    baseSize: { height: 1040, width: 1040 },
    actions: [{
      type: 'uri',
      linkUri: msg,
      area: { x: 0, y: 0, width: 1040, height: 1040 }
    }, {
      type: 'message',
      text: 'hello',
      area: { x: 520, y: 0, width: 520, height: 175 }
    }]
  })