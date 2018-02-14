let express = require('express')
let todoController = require('./controllers/todoController')

let app = express()

// set up template engine
app.set('view engine', 'ejs')

// serve static files on every route in public folder
app.use(express.static('public'))

// fire controllers
todoController(app)

// listen to port
app.listen(3000)
console.log('listening to port 3000')
