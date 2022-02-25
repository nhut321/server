require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server, {
	cors: {    origin: "http://localhost:3000",    methods: ["GET", "POST"]  }
})

app.use(cors())
// io.use(cors())

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const db = require('./config/db')
db.connect()

io.on('connection',(socket) => {
	socket.on('message', ({name,message}) => {
		io.emit('message',{name,message})
	})
})

const routes = require('./routes')
routes(app)

server.listen(port, () => console.log('Sever connected at port '+port))