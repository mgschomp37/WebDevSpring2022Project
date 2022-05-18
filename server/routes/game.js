const express = require('express');
const Game = require('../models/game');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const games = await Game.getGames();
        res.send(games);
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})







