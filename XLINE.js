const crypto = require('crypto');
const channelSecret = '6baf8c3075c7c10d98b7f1d4afcf2146'; // Channel secret string
const body = ''; 
// Request body string
const signature =
  createHmac('SHA256', channelSecret)
  .update(body).digest('base64');
// Compare X-Line-Signature request header and the signature