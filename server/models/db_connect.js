require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, binding, (err, result, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}



connection.connect(function(err){
    if(err) throw err;
    console.log("Connected to database!");
    connection.query("CREATE DATABASE IF NOT EXISTS gamenight_db", function (err, result) {
        if (err) throw err;
        console.log("Database created!");
    });
});

module.exports = {connecion, query}