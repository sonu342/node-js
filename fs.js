// File system

const data = require('fs')
// console.log(data)

// async 

console.log('Hello Gaurav')

try {
    data.readFile(__dirname + "/user.txt","utf8", (err,d) =>{
        console.log(d)
    })
} catch (error) {
    console.log(error) 
}

console.log("Hello Userrrrrr")


// sync 

// const d = data.readFileSync(__dirname + "/user.txt" , "utf8")
// console.log(d)

// console.log("Hello Gwalior")