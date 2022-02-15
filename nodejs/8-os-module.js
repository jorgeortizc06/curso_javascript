const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The System Uptime is ${((os.uptime())/60).toFixed(2)} minutes`)

totalMem =((os.totalmem()/1024)/1024).toFixed(2)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem,
    freeMem: (os.freemem()/1024)/1024,
    platform: os.platform()
}

console.log(currentOS)