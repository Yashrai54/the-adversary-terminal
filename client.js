const net = require("net")

const conn = net.createConnection(3000)

conn.on("data",data=>{
    process.stdout.write(data.toString())
})

process.stdin.on("data",msg=>{
    conn.write(msg)
})