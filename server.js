const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
})
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()


app.set('io', io);

io.on('connection', socket => {
  console.log('Got connection');
});

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, '0.0.0.0', err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
