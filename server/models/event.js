const connection = require('../db_connect');

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

