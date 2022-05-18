const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.post('/', async (req, res) => {
    try{
        const message = await Message.createMessage(req.body);
        res.send(message);
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})

router.get('/', async (req, res) => {

})

router.delete('/', async (req, res) => {
    
})