const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "priya2611",
    database : "users",
    multipleStatements : true
});

mysqlConnection.connect((err) =>{
    if(!err){
        console.log("Connected");
    }
    else{
        console.log("Connection failed",err);
    }

});

module.exports = mysqlConnection;