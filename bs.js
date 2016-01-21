var sum = 0
var a = process.argv
for (index = 2, len = a.length; index < len; ++index)
	sum += +a[index]
console.log(sum)
