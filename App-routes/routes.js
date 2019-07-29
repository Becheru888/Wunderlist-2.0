const express = require('./node_modules/express')
const router = express.Router();

router.get('/list', (req, res) =>{
    try{
        res.status(200).json('Is working')
    }catch(error){
        res.status(500).json(error)
    }
})



module.exports = router;