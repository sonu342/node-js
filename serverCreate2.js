const a = require("http")
const server = a.createServer(function (req,res){
                           res.write('<h1>Welcome MPCT COLLEGE </h1>')
                           res.end()
                       }).listen(3000,()=>console.log('server is running port localhost:3000'))