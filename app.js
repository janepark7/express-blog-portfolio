require("dotenv").config;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.js");
const foodBlog = require("./util/foodBlog.js");
const sql = require("./util/sql.js");


app.set("view engine", "ejs");
app.use(express.static("assets"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/", indexRoutes);



app.get("*", function (req, res) {
	res.send('<img src="/css/images/bowie.jpg">');
});

app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
