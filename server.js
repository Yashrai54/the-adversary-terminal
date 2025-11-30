const net = require("net")
const crypto = require("crypto")
const readline = require("readline")

let clients = []
let selected = null
function handleCommand(cmd) {
    if (cmd == "/list") {
        console.log("Connected Clients:")
        clients.forEach((client) => console.log(`- ${client.id} -`))
    }
    else if (cmd.startsWith("/select ")) {
        const targetid = cmd.split(" ")[1]
        const client = clients.find(client => client.id == targetid)

        if (!client) return console.log("Invalid Id")

        selected = client
        console.log(`Selected Client-${targetid}`)
    }
    else if (cmd.startsWith("/send ")) {
        if (!selected) return console.log("no client selected")
        const msg = cmd.replace("/send ", " ")
        selected.socket.write(msg + "\n")
    }
    else if (cmd.startsWith("/broadcast")) {
        const msg = cmd.replace("/broadcast ", " ")
        clients.forEach((client => client.socket.write(msg + "\n")))
    }
}

const server = net.createServer(socket => {
    let id = crypto.randomUUID()
    clients.push({ id, socket })
    socket.write(`[+] Client ${id} connected`)
    socket.write(`[+] Your Client-Id is ${id}`)

    socket.on("data", msg => {
        console.log(`[Client- ${id}] ${msg.toString().trim()}`)
    })
    socket.on("end", () => {
        clients = clients.filter(client => client.id !== id)
        console.log(`[Client ${id}] disconnected`)
    })
   

})
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on("line", line => {
    handleCommand(line.trim())
})


server.listen(3000, () => console.log("server up"))