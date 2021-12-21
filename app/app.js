var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/ExpressAPI');
mongoose.connection.on('error',function(err){
  console.error('MongoDb connection error: ' + err);
  process.exit(-1);
});
app.use(cors({
  origin: 'http://localhost:8080', //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = require('./routes/v1/');
app.use('/api/v1/', router)

app.listen(port);
console.log('listen on port:' + port );