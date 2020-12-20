const express = require('express');
const router = express.Router();


// Load List model
const Lists = require('../../Model/Lists');

// @route  api/lists/test
// @desc   test route
// @access public  
router.get('/test', (req,res) => res.json({msg:"route working perfect"}));


// @route  api/lists
// @desc   add list 
// @access public  
router.post('/',(req,res) =>{
    const newList = new Lists({
        list: req.body.list
      });
      newList.save()
            .then(list => res.json(list))
            .catch(err => console.log(err));
} );
// @route  api/lists/deletelist
// @desc    delete list
// @access public  
router.delete('/:list_id',(req,res) =>{
    
    Lists.find({_id:req.params.list_id}).remove()
    .then(()=>res.json({success:true, list: 'List deleted'}))
    } );

// @route  api/lists/updatelist
// @desc    delete list
// @access public  
router.post('/:list_id',(req,res) =>{
  const listFields = {};
  if(req.body.list)        listFields.list = req.body.list;

  Lists.findOne({_id:req.params.list_id})
        .then(list =>{
            if(list){
                //update
                Lists.findOneAndUpdate({_id:req.params.list_id},{$set:listFields }, {new:true})
                .then(list => res.json(list));
                }
                
})});

//@route   GET /api/lists/all
//@desc    Get  all lists
//@access  public
router.get('/all', (req,res)=>{
  
Lists.find()
.then(lists => {
  if(!lists ){
      res.status(404).json({msg:"There are no no lists"})
  }
  res.json(lists);
}).catch(err => res.status(404).json({lists: 'There are no lists '}));
})






module.exports = router;