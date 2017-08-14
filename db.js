var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const dbUrl = 'mongodb://localhost/gittrend';

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, {
  useMongoClient: true,
  autoReconnect: true,
  config: {
    autoIndex: false
  }
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('连接数据库成功')
})

db.on('error', function (error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});

db.on('close', function () {
  console.log('数据库断开，重新连接数据库');
  mongoose.connect(dbUrl, {
    useMongoClient: true,
    autoReconnect: true,
    config: {
      autoIndex: false
    }
  });
});

module.exports = db;