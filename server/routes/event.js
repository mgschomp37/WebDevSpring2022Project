const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.get('/', async (req, res) => {
    try{
        const events = await Event.getEvents();
        res.send(events);
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})

router.delete('/', async (req, res) => {
    try {
        await Event.deleteEvent(req.body.eventId);
        res.send({message: "Event deleted"});
    }
    catch (err) {
        res.status(401).send({message: err.message});
    }
})


module.exports = router;