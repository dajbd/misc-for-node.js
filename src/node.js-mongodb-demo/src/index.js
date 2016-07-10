var client = require('mongodb').MongoClient
var assert = require('assert')
    // 我的 mongodb 已经创建了demo1数据库
    // 数据库存放了 students 表，里面有一个记录了
var url = 'mongodb://localhost:27017/demo1'

var mod = {
    init() {
        this.connect(() => {
            this.findAllStudents()
            this.close()
        })
    },
    connect(callback) {
        client.connect(url, (err, db) => {
            assert.equal(null, err)
            this.db = db
            console.log('Connected !')
            callback()
        })
    },
    close() {
        this.db.close()
        console.log('Closed !')
    },
    findAllStudents() {
        var c = this.db.collection('students')
        c.find({}).toArray(function(err, docs) {
            console.log(docs)
        })
    }
}

// run
mod.init()
