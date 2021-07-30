import { Todo } from '../models/todo.js'

export{
index,
create,
deleteTodo as delete
}

function index(req, res) {
 Todo.find({})
  .then(todos => {
   res.render('todos/index', {
      todos,
  })
 })
}

function create (req, res) {
 Todo.create(req.body)
 .then(() => {
  res.redirect('/todos')
 })
}


function  deleteTodo(req, res) {
 Todo.findByIdAndDelete(req.params.id)
 .then(() => {
  res.redirect('/todos')
 })
}