const http = require('http')
const path = require('path')
const express = require('express')
const socketio = require('socket.io')
const cors = require('cors')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

require('./socket')(io)

app.set('port', process.env.PORT || 5000)
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

server.listen(app.get('port'), () => {
  console.log(`Aplicacion corriendo en http://localhost:${app.get('port')}`)
})
