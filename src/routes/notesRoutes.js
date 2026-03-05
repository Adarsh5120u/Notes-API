const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Routes are working fine");
});

module.exports=router;