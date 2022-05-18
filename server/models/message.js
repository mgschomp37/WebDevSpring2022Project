const connection = require('./db_connect');
async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS messages (
        messageID INT NOT NULL AUTO_INCREMENT,
        message VARCHAR(255) NOT NULL,
        FOREIGN KEY (messageID) REFERENCES users(userID),
    )`
}
createTable();



async function getMessage(message) {
    let sql;
    if(message.messageId) {
        sql = `SELECT * FROM messages
            WHERE message_id = ${message.messageId}`;
    } else {
        sql = `SELECT`
    }
}

async function addMessage(message) {
    const sql = `INSERT INTO messages (message) VALUES ("${message.message}")`;
    const insert = await connection.query(sql);
    const newMessage = await getMessage(message);
    return newMessage[0];
}

async function deleteMessage(message) {
    const sql = `DELETE FROM messages
        WHERE message_id = ${message.messageId}`;
    const deleteMessage = await connection.query(sql);
    return deleteMessage;
}

