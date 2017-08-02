var MongoClient = require('mongodb').MongoClient;
//数据库为 runoob
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; 
var insertData = function(db, callback) {
    //连接到表 site
    var collection = db.collection('site');
    //插入数据
    var data = [{"name":"菜鸟教程2","url":"www.runoob.com"},{"name":"菜鸟工具4","url":"c.runoob.com"}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});