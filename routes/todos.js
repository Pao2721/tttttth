import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'
const router = Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('todos', {title: 'Todo List'}) 
})
router.get('/', todosCtrl.index)
router.post('/', todosCtrl.create)
router.delete('/:id', todosCtrl.delete)
// router.get('/new', todosCtrl.new)


export {
  router
}
