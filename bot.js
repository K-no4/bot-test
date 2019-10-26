var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;
function respond() {
  var dv, msg, str, request = JSON.parse(this.req.chunks[0]);

  msg=request.text;
  dv=request.userid;
  msg=msg.toLowerCase();
  console.log(dv);
  console.log(msg);
      switch (msg){
        case '/t':
          this.res.writeHead(200);
          postInfo(1);
          this.res.end();
          break;
        case '/h':
          this.res.writeHead(200);
          postInfo(2);
          this.res.end(200);
          break;
          case '/e':
          this.res.writeHead(200);
          postInfo(3);
          this.res.end();
          break;
        case "69":
          this.res.writeHead(200);
          postCringe(1);
          this.res.end();
          break;
        case 'no':
          this.res.writeHead(200);
          postCringe(2);
          this.res.end();
          break;
        case 'hello':
          this.res.writeHead(200);
          postCringe(5);
          this.res.end(200);
          break;
        default:
        console.log("unkown response");
        this.res.writeHead(200);
        this.res.end();

      }


      if (msg.indexOf("hey")>=0){
        console.log(true);
           if (msg.indexOf("boss")>=0){
          console.log(true);
          this.res.writeHead(200);
          postCringe(3);
          this.res.end(200);
        }
          else{}
      }
      else{}
    
      if (msg.indexOf("fuck")>=0){
        console.log(true);
           if (msg.indexOf("you")>=0){
          console.log(true);
            if (msg.indexOf("no")<0){
            this.res.writeHead(200);
            postCringe(4);
            this.res.end(200);
          }
            else{}
        }
          else{}
      }
      else{} 

      if (msg.indexOf("destroy")>=0){
        console.log(true);
           if (msg.indexOf("humanity")>=0){
          console.log(true);
          this.res.writeHead(200);
          postCringe(6);
          this.res.end(200);
        }
          else{}
      }
      else{
        console.log(false);
      }   

}

function postInfo(txt){
  var botResponse, options, body, botReq, txt;


  switch(txt){  
    case 1:
    botResponse = 'UT-Austin\r\n  https://www.facebook.com/events/392382481673389/';
    break;
    case 2:
    botResponse = 'This';
    break;
    case 3:
    botResponse = 'this is a random test';
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

function postCringe(txt){
  var txt, botResponse, options, body, botReq;

    switch (txt)
    {
      case 1:
        botResponse="Nice";
      break;
      case 2:
        botResponse="yes";
      break;
      case 3:
        botResponse="can I habe a pizza please";
        break;
      case 4:
        botResponse="No fuck you";
        break;
      case 5:
        botResponse="Hello Human";
        break;
      case 6:
        botResponse="Soon";
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