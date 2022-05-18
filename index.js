const path = require('path');
const express = require('express');
const app = express();

const userRoutes = require("./server/routes/user");
const gameRoutes = require("./server/routes/game");
const eventRoutes = require("./server/routes/event");
const messageRoutes = require("./server/routes/message");


app.use(express.json());
app.use(express.static(__dirname, '/public'));



//CORS middleware
app.use(function(_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.use("/users", userRoutes);
app.use("/games", gameRoutes);
app.use("/events", eventRoutes);
app.use("/messages", messageRoutes);

app.get('*', function(_req,res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));