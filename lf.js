var fs = require('fs')
var path = require('path')
module.exports = function (dir, ext, callback) {
  var result = []
  fs.readdir(dir, function(err, list){
    if(err){
      return callback(err)
    }
    for(val of list){
      if(path.extname(val) === '.' + ext)
        result.push(val);
    }
    callback(null,result)
  })
}
