new function() {
    var mod = {
        init() {
            // var partitions = this.getAllPartitionsOnWindows()
            // console.log('1:' + partitions)
            this.getAllPartitionsOnWindows().then(function(data) {
                console.log(data)
            }, function(e) {
                console.error(e)
            })
        },
        getAllPartitionsOnWindows() {
            return new Promise(function(resolve, reject) {
                // 通过google查询，windows上获取磁盘分区，比较好的方案，就是执行cmd命令来获取了
                // http://stackoverflow.com/questions/12622758/list-partitions-in-nodejs
                const exec = require('child_process').exec
                const cmd = 'wmic logicaldisk get name'

                exec(cmd, function(error, stdout, stderr) {
                    if (error) {
                        // return
                        reject(error)
                    }

                    var partitions = stdout.split('\n')
                        .map((el) => {
                            return el.trim().replace(/\\r/g, '')
                        })
                        // 返回的数组中，有一个值不是磁盘分区，干掉他，鉴别：有":"的才是磁盘分区
                        .filter((el) => {
                            var hasMark = el.indexOf(':') > -1 ? true : false
                            return hasMark
                        })

                    // return partitions
                    resolve(partitions)
                })
            })

        }
    }

    // run
    mod.init()
}
