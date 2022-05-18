const connection = require("db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS users (
        userID INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL,
        pword VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        fname VARCHAR(255) NOT NULL,
        lname VARCHAR(255) NOT NULL,
        FOREIGN KEY (userID) REFERENCES games(gameID),
        PRIMARY KEY (userID)
    )`;
    await con.query(sql);
}
createTable();

//function to get all users
let getUsers = async () => {
    const sql = "SELECT * FROM users";
    return await con.query(sql);
};

async function getUser(user) {
    let sql;
    if(user.userId) {
        sql = `SELECT * FROM users
            WHERE user_id = ${user.userId}`;
    } else {
        sql = `SELECT`
    }
}

async function login(username, pword) {
    const user = await userExists(username);
    if(!user[0]) throw Error("User not found");
    if(user[0].pword !== pword) throw Error("Incorrect password");

    return user[0];
}

async function register(user) {
    const u = userExists(user.username);
    if(u.length > 0) throw Error("Username already exists");
    const sql = `INSERT INTO users (username, pword) VALUES ("${user.username}", "${user.pword}")`;

    const insert = await con.query(sql);
    const newuser = await getUser(user);
    return newUser[0];
}

async function userExists(username) {
    const sql = `"SELECT * FROM users WHERE username = "${username}"`;
    let u = await connection.query(sql);
    console.log(u);
    return u; 
}

async function editUser(user){
    const sql = `UPDATE users SET
    username = "{$user.username}"
    WHERE user_id = ${user.userId}`;

    const update = await connection.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
    
}

async function deleteUser(userId){
    const sql = `DELETE FROM users WHERE user_id = ${userId}`;
    await connection.query(sql);
}

//need to export to allow access
module.exports = { getUsers, login, register, deleteUser, editUser, createTable };
