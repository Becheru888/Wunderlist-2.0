const express = require('express');
const bcrypt = require('bcrypt');
const token = require('../auth/token');

const router = express.Router();
const DB = require('./routes-model')

// const { authenticate } = require('../auth/authenticate');

router.get('/users', async (_, res) => {
    const getUsers = await DB.getUsers()
    try {
        res.status(200).json(getUsers)
    } catch (error) {
        res.status(500).json(error)
    }
});


router.get('/users/assignments', async (_, res) => {
    const assignments = await DB.findTaskAssign()
    try {
        res.status(200).json(assignments)
    } catch (error) {
        res.status(500).json('Something went wrong')
    }
})


router.get('/users/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await DB.findUserById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json('something')
    }
});

router.post('/users/register', async (req, res) => {
    try {
        const user = req.body
        const hash = bcrypt.hashSync(user.password, 10)
        user.password = hash
        await DB.addUser(user)
            .then(user => {
                const newToken = token.generateToken(user);
                res.status(200).json({
                    message1: `Welcome to the party ${user.username}`,
                    message2: `This is your new token to use ${newToken}`
                })
            })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updateUser = req.body
        await DB.userUpdate(id, updateUser)
        res.status(200).json({ message: `User with the id ${id} was updated` })
    } catch (error) {
        res.status(500).json('Something went wrong')
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        await DB.removeUser(id)
        res.status(200).json({ message: `User with the id ${id} was removed` })
    } catch (error) {
        res.status(500).json('Something went wrong')
    }
})

//// ===== TASKS ======   ENDPOINT ========////

router.get('/tasks', async (_, res) => {
    const getUsers = await DB.getTasks()
    try {
        res.status(200).json(getUsers)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/tasks/:id', async (req, res) => {
    const { id } = req.params
    try {
        const task = await DB.findTaskById(id)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json('something')
    }
});


router.post('/tasks/newtask', async (req, res) => {
    try {
        const { task_name } = await DB.addTask(req.body)
        res.status(200).json({ message: `New task --> ${task_name} added.` })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updateTask = req.body
        await DB.taskUpdate(id, updateTask)
        res.status(200).json({ message: `Task with the id ${id} was updated` })
    } catch (error) {
        res.status(500).json('something')
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params
        await DB.removeTask(id)
        res.status(200).json({ message: `Task with the id ${id} was removed` })
    } catch (error) {
        res.status(500).json('Something went wrong')
    }
})

module.exports = router;