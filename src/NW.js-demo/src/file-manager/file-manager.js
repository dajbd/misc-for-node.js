new function() {
    console.log(0)
        // var Vue = require('Vue')

    console.log(1)
    var fileManager = new Vue({
        el: '.file-list',
        data: {
            files: []
        },
        created: function() {
            console.log(2)
                // var partitions = this.getAllPartitionsOnWindows()
                // console.log('1:' + partitions)
            this.getAllPartitionsOnWindows().then(function(data) {
                fileManager.files = data
                console.log(data, fileManager.data)
            }, function(e) {
                console.error(e)
            })
        },
        methods: {
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
                            .map((el) => {
                                return {
                                    name: el,
                                    type: 'disk'
                                }
                            })

                        // return partitions
                        resolve(partitions)
                    })
                })

            }
        }
    })

}
