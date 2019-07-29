const express = require('express');
const router = express.Router();
const DB = require('./routes-model')




router.get('/users', async (req, res) => {
    const getUsers = await DB.getUsers()
    try {
        res.status(200).json(getUsers)
    } catch (error) {
        res.status(500).json(error)
    }
});


router.get('/users/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await DB.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json('something')
    }
});


module.exports = router;