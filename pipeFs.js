const fs = require('fs')

const readStream = fs.createReadStream('./temp/stream1.txt','utf8')

const writeStream = fs.createWriteStream('./temp/stream2.txt')

readStream.pipe(writeStream)