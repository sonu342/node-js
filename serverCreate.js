const h = require('http')
// console.log(h)
const server = h.createServer(function (req,res){
    res.write('<h1>Welcome Node JS </h1>')
    res.end()
}).listen(3000,()=>console.log('server is running port localhost:3000'))