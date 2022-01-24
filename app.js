require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const db = require('./config/db')
db.connect()

const routes = require('./routes')
routes(app)

app.listen(port, () => console.log('Sever connected at port '+port))