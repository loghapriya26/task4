const express = require("express");
const mysqlConnection = require("./connections");

const UserRoutes = require("./routes/users");

var app = express();

app.use("/users", UserRoutes);

app.listen(3000,() => {console.log("Listining on port 3000...")});