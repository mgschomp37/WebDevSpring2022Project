const connection = require('../db_connect');
async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS messages (
        messageID INT NOT NULL AUTO_INCREMENT,
        message VARCHAR(255) NOT NULL,
        FOREIGN KEY (messageID) REFERENCES users(userID),
    )`
}
createTable();

