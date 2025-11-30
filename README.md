# Adversary-Terminal

**Description:**  
This project implements a lightweight TCP command-and-control type setup 

---

## Features
- Multiple TCP clients can connect to central TCP Server.
- Server recieves the id of each client along with the message.

- Server can run commands like **/list** for listing all the connected clients **/select <id>** to select a specific client who can be sent a private message using **/send** command. If any message needs to be sent to each of the connected clients its possible through **/broadcast**.

---

## Tech Stack
- Languages: JavaScript, HTML
- Backend: Node.js, WebSockets
- Concepts: TCP Connections

---

## Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Install Dependencies :
   ```bash
   npm install
   ```

3. Start the TCP server:
   ```bash
   node server.js
   ```
4. Start the WebSocket:
   ```bash
   node bridge.js
   ```
7. Open index.html on your browser.

## Learning Outcomes

- Understood TCP sockets practically.
- Understood the working of central server with multiple clients.
- Understood how command based admin panel works using readline interface


