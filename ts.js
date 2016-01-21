var net = require('net')
var server = net.createServer(function (socket) {
  date = new Date()
  data = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) +            '-'+ ('0' + date.getDate()).slice(-2) + ' ' + date.getHours() + ':' +           ('0' + date.getMinutes()).slice(-2)
  socket.end(data)
})
server.listen(process.argv[2])

