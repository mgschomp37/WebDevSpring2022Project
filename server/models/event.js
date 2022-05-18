const connection = require("../models/db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS events (
        eventID INT NOT NULL AUTO_INCREMENT,
        eventName VARCHAR(255) NOT NULL,
        eventDate DATE NOT NULL,
        eventTime TIME NOT NULL,
        eventLocation VARCHAR(255) NOT NULL,
        FOREIGN KEY (eventID) REFERENCES games(gameID),
        FOREIGN KEY (eventID) REFERENCES users(userID),
        PRIMARY KEY (eventID)
    )`;
    await connection.query(sql);
}
createTable();

async function addEvent(event) {
    const sql = `INSERT INTO events (eventName, eventDate, eventTime, eventLocation) VALUES ("${event.eventName}", "${event.eventDate}", "${event.eventTime}", "${event.eventLocation}")`;
    const insert = await connection.query(sql);
    const newEvent = await getEvent(event);
    return newEvent[0];
}
function getEvent(event) {
    let sql;
    if(event.eventId) {
        sql = `SELECT * FROM events
            WHERE event_id = ${event.eventId}`;
    } else {
        sql = `SELECT`
    }
}

async function deleteEvent(event) {
    const sql = `DELETE FROM events
        WHERE event_id = ${event.eventId}`;
    const deleteEvent = await connection.query(sql);
    return deleteEvent;
}

module.exports = {addEvent, getEvent, deleteEvent};

