const connection = require('../db_connect');

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS games (
        gameID INT NOT NULL AUTO_INCREMENT,
        gameName VARCHAR(255) NOT NULL,
        minNumPlayers INT NOT NULL,
        maxNumPlayers INT NOT NULL,
        gameID PRIMARY KEY (gameID)
        
    )`
}
createTable();

let getGames = async () => {
    const sql = "SELECT * FROM games";
    return await con.query(sql);
}

async function getGame(game) {
    let sql;
    if(game.gameId) {
        sql = `SELECT * FROM games
            WHERE game_id = ${game.gameId}`;
    } else {
        sql = `SELECT`
    }
}

async function addGame(game) {
    const sql = `INSERT INTO games (gameName, minNumPlayers, maxNumPlayers) VALUES ("${game.gameName}", "${game.minNumPlayers}", "${game.maxNumPlayers}")`;
    const insert = await con.query(sql);
    const newGame = await getGame(game);
    return newGame[0];
}

async function getGameInfo(game) {
    let sql;
    if(game.gameId) {
        sql = `SELECT * FROM games
            WHERE game_id = ${game.gameId}`;
    } else {
        sql = `SELECT`
    }
}

async function addGametoPlay(game) {
    const sql = `INSERT INTO games (gameID, userID) VALUES ("${game.gameID}", "${game.userID}")`;
    const insert = await con.query(sql);
    const newGame = await getGame(game);
    return newGame[0];
}


module.exports={getGames, addGame, getGameInfo, addGametoPlay};