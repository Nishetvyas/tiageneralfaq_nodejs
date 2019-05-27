let express = require('express'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000,
  app = express();
let alexaVerifier = require('alexa-verifier');
var isFisrtTime = true;
const SKILL_NAME = 'Disney Heroes';

app.use(bodyParser.json({
  verify: function getRawBody(req, res, buf) {
    req.rawBody = buf.toString();
  }
}));

function log() {
  if (true) {
    console.log.apply(console, arguments);
  }
}

//for check api run or not.
app.get('/', function (req, res) {
  res.send('hello world')
})


app.listen(port);

console.log('Alexa list RESTful API server started on: ' + port);
