const express = require('express');
const router = express.Router();


// @route  api/lists/test
// @desc   test route
// @access public  
router.get('/test', (req,res) => res.json({msg:"route working perfect"}));

module.exports = router;