const {readFileSync,writeFileSync} = require('fs')


//readFileSync(path) is used to read any files using specific paths.
const file1= readFileSync("./firstFile.txt", 'utf8')
const file2= readFileSync("./secondFile.txt", 'utf8')

console.log(`${file1},${file2}`)


//writeFileSync(path, data to overide) this helps to create new files using specific paths
const createFile = writeFileSync('./contents/subFolder/thirdFile-sync.txt',`${file1},${file2}`)

// this does the work synchronously
//i.e it blocks the callstack