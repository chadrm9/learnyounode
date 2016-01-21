var lf = require('./lf')
lf(process.argv[2], process.argv[3], function(err, data){
  if(err)
    console.log(err)
  else {
    for (val of data)
      console.log(val)
  }
})
