const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connections");

Router.get("/",(req, res) =>{
    console.log("Requesting users")
    mysqlConnection.query("SELECT * FROM user", (err, rows, fields) =>{
        if(!err)
        {
            res.send(rows);
            console.log(rows);
        }
        else{
            console.log(err);
        }

    })
});

module.exports = Router;