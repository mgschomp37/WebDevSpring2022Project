const connection = require('../db_connect');

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS games (
        gameID INT NOT NULL AUTO_INCREMENT,
        gameName VARCHAR(255) NOT NULL,
        minNumPlayers INT NOT NULL,
        maxNumPlayers INT NOT NULL,
        gmeID PRIMARY KEY (gameID)
        
    )`
}
createTable();

