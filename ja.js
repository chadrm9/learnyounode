var http = require('http')
var results = []
var count = 0

function httpGet(index){
  var result = ''
  http.get(process.argv[2 + index], function (response) {
    response.setEncoding('utf8')
    response.on('data', function (data) {
      result += data
    })
    response.on('end', function (data) {
      results[index] = result
      count++
      if (count == process.argv.length - 2)
        printArray(results)
    })
  })
}

function printArray(array){
  for(i=0;i<array.length;i++)
    console.log(array[i])
}

for(i=0;i<process.argv.length-2;i++)
  httpGet(i)
