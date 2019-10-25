var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var msg, request = JSON.parse(this.req.chunks[0]),
  msg=request.text;
      switch (msg){
        case '/t':
          this.res.writeHead(200);
          postAnouncement();
          this.res.end();
          break;
        case '/help':
          this.res.writeHead(200);
          postHelp();
          this.res.end();
          break;
          case '69':
          this.res.writeHead(200);
          postCringe(1);
          this.res.end();
          break;
          case 'no':
          this.res.writeHead(200);
          postCringe(2);
          this.res.end();
        default:
        console.log("unkown response");
        this.res.writeHead(200);
        this.res.end();

      }
}

function postAnouncement(){
  var botResponse, options, body, botReq;


  botResponse = "UT-Austin\r\n  https://www.facebook.com/events/392382481673389/";

    options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postHelp(){
  var botResponse, options, body, botReq;


  botResponse = "This bot responds to comands in the format of /'text' \r\n There currently two comands: \r\n /help - gives list of commands \r\n /t - gives information about the latest tournament";

    options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postCringe(txt){
  var txt, botResponse, options, body, botReq;


    switch (txt)
    {
      case 1:
        botResponse="words 1";
      break;
      case 2:
        botResponse="words 2";
      break;
      default:
      break;
    }
    options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}




exports.respond = respond;