const express = require('express');
const router = express.Router();


// Load Todo model
const Todos = require('../../Model/Todo');

// Load List model
const Lists = require('../../Model/Lists');


// @route  api/todos/test
// @desc   test route
// @access public  
router.get('/test', (req,res) => res.json({msg:"todos working perfect"}));


// @route  api/todos
// @desc   add todo 
// @access public  
router.post('/',(req,res) =>{
    const newTodo = new Todos({
        listId: Lists._id,
        marked: req.body.marked,
        title: req.body.title,
        date: req.body.date
      });
      newTodo.save()
            .then(todo => res.json(todo))
            .catch(err => console.log(err));
} );

//@route   GET /api/todos/all
//@desc    Get  all lists
//@access  public
router.get('/all', (req,res)=>{
  
  Todos.find()
  .then(todos => {
    if(!todos ){
        res.status(404).json({msg:"There are no no lists"})
    }
    res.json(todos);
  }).catch(err => res.status(404).json({todos: 'There are no lists '}));
  });
  
// @routeUsed  api/todos
// @desc       update list
// @access     public  
router.post('/:todo_id',(req,res) =>{
  const todoFields = {};
  if(req.body.marked)        todoFields.marked = req.body.marked;
  if(req.body.title)        todoFields.title = req.body.title;
  if(req.body.date)        todoFields.date = req.body.date;

  Todos.findOne({_id:req.params.todo_id})
        .then(todo =>{
            if(todo){
                //update
                Todos.findOneAndUpdate({_id:req.params.todo_id},{$set:todoFields }, {new:true})
                .then(todo => res.json(todo));
                }
                
})});
// @route  api/todos/
// @desc    delete todo
// @access public  
router.delete('/:todo_id',(req,res) =>{
    
  Todos.find({_id:req.params.todo_id}).remove()
  .then(()=>res.json({success:true, list: 'List deleted'}))
  } );


module.exports = router;