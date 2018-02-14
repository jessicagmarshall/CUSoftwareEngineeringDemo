let bodyParser = require('body-parser')

let data = [{item: 'goobi 1'}, {item: 'goobi 2'}, {item: 'goobi 3'}]
let urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function (app) {
  app.get('/todo', function (req, res) {
    res.render('todo', {todos: data})
  })

  app.post('/todo', urlencodedParser, function (req, res) {
    data.push(req.body)
    res.json(data)
    console.log('post todo')
  })

  app.delete('/todo/:item', function (req, res) {
    data = data.filter(function (todo) {
      return todo.item.replace(/ /g, '-') !== req.params.item
    })
    res.json(data)
    console.log('delete todo')
  })
}
