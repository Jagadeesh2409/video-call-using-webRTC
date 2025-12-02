const express = require('express')
const app = express()
const {createServer} = require('http')
const {Server} = require('socket.io')
const server = createServer(app)
const path = require('path')
const io = new Server(server,{
    cors:{
        origin:"*",
        methods:["POST","GET"]
    }
})

require('./socket')(io)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

server.listen(3000,()=>{
    console.log('server is running port is http://localhost:3000')
})