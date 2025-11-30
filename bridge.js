const net  = require("net")
const ws = require("ws")

const wss = new ws.Server({port:8080})

const tcp = net.connect(3000, ()=>console.log("TCP Server Connected"))

wss.on("connection",ws=>{
    console.log("Browser Connected")

    ws.on("message",msg=>{
        tcp.write(msg);
    })
    tcp.on("data",data=>{
        ws.send(data.toString())
    })
})