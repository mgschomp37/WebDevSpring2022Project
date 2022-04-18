const express = require('express');
const { append } = require('express/lib/response');
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
module.exports = router;