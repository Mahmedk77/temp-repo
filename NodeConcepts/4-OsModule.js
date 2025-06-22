const os = require('os')

console.log(os.userInfo())
console.log(`Os uptime ${os.uptime()}`)

const osDetails = {
    name: os.type(),
    version: os.release(),
    totalMemory: os.totalmem(),
    FreeMemory: os.freemem()
}


console.log(osDetails)