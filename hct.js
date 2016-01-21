var http = require('http')
var len = 0
var msg = ''
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', function (data) {
    msg += data
    len += data.length
  })
  response.on('end', function (data) {
    console.log(len.toString())
    console.log(msg)
  })
})
