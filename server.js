
//mognoose connection
MONGODB_URI = 'mongodb+srv://gerardo:gerardo@cluster0.uvz0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI || 'mongodb://127.0.0.1:27017/todo-list').then(() => {console.log('mongoDB connected')})
const Todo = require('./models/todo')


const express = require('express');
const methodOverride = require('method-override')
const app = express();
const ejsMAte = require('ejs-mate');
const path = require('path')

//middleware
app.engine('ejs', ejsMAte) //EJS-MATE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))





app.get('/', async (req,res) => {
    const todo = await Todo.find({});
    res.render('todos', {todo: todo} )
})

app.post('/new', async (req,res) => {
    const todo = req.body.todo;
    const newTodo = new Todo({todo});
    await newTodo.save()
    res.redirect('/')
    
})

app.get('/deleteTask' , async(req,res) => {
    await Todo.deleteMany({})
    res.redirect('/')
    
})

app.delete('/delete/:id', async (req,res) => {
    const todo = await Todo.findByIdAndRemove(req.params.id);
    res.redirect('/')
})


app.listen(process.env.PORT || 3000, () => {
    console.log('app listening on port 3000');
})