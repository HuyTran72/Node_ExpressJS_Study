var dataFile = require('./data.json')
var fs = require('fs')

console.log(dataFile)

fs.readFile('./other.txt', 'utf-8', (err, data) => {
	console.log(data)
})
