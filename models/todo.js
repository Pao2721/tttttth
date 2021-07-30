import mongoose from 'mongoose'
const Schema = mongoose.Schema

export{
 Todo
}

const todoSchema = new Schema ({
 title: {type:String, done: false, required: true},

}, {
 timestamps: true
})
const Todo = mongoose.model('Todo', todoSchema)