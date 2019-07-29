const express = require('express');
const router = express.Router();
const DB = require('./routes-model')




router.get('/users', async (req, res) =>{  
    const taskAssigned = await DB.findTaskAssign()
    try{
        res.status(200).json(taskAssigned)
    }catch(error){
        res.status(500).json(error)
    }
})



module.exports = router;