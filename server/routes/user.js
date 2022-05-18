const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', (_req, res) => {
    try{
        const users = User.getUsers();
        res.send(users);
    } catch (err) {
        res.status(401).send({message: error.message});
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.login(req.body.username, req.body.password);
        res.send( {...user, password: undefined} );
    }
        catch (err) {
        res.status(401).send({message: err.message});
    }
})

router.post('/register', async (req, res) => {
    try {
        const user = await User.register(req.body);
        res.send( {...user, password: undefined} );
    }
        catch (err) {
        res.status(401).send({message: err.message});
    }

    
})

router.put('/edit', async (req, res) => {
    try{
        const user = await User.editUser(req.body);
        console.log(user);
        res.send({...user, pword: undefined});
    }
    catch (err) {
        res.status(401).send({message: err.message});
    }
})

router.delete('/delete', async (req, res) => {
    try {
        await User.deleteUser(req.body.userId);
        res.send({message: "User deleted"});
    }
    catch (err) {
        res.status(401).send({message: err.message});
    }
})

module.exports = router; 