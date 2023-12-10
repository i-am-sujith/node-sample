// const names = require('./names')
// const sayHi = require('./app')
// const data =require('./6-alternative')

// require('./7-mindGrenade')


// console.log(data)

// sayHi(names.john)
// sayHi(names.peter)

const os = require('os')

const user =os.userInfo()

// console.log(user)//user info

// console.log(`the system uptime ${os.uptime()} seconds`)//system uptime since last reboot

// const currentOs= {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }

// console.log(currentOs)

// const {readFileSync,writeFileSync}=require('fs')

// const first = readFileSync('./content/first.txt','utf8')

// const second = readFileSync('./content/second.txt','utf8')

// // console.log(first , second)

// writeFileSync('./content/result-sync.txt',`here is the result........ ${first} , ${second}`)
// const { readFile, writeFile } = require('fs')

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     const first = result
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const second = result


//         writeFile('./content/result-asynch.txt', `here is the result : ${first},${second}`, (err, result) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log(result)
//         })
//     })
// })