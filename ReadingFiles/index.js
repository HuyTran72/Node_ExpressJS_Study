var dataFile = require('./data.json')
var fs = require('fs')

console.log(dataFile)

fs.readFile('./other.txt', 'utf-8', (err, data) => {
	console.log(data)
})

fs.readFile('./data.json', 'utf-8', (err, data) => {
	var received = JSON.parse(data)
	console.log(received.address)
})

fs.readdir('../', (err, data) => {
	console.log(data)
})
