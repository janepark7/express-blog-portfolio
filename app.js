require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.js");
const foodblog = require("./util/foodblog.js");
const sql = require("./util/sql.js");
const foodblogpost = require("./models/post.js");

app.set("view engine", "ejs");
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function renderFoodBlog(res,message) {
	foodblog.findAll().then(function(title){
		res.render("FoodBlog", {
				title: title,
				body: message,
		});
	});
}

app.use("/", indexRoutes);

app.get("/form", function(req, res) {
	res.render("form");
});

app.post("/foodblog", function(req, res) {
	foodblog.create({
		title: req.body.title,
		body: req.body.message,
	})
	.then(function() {
			renderFoodBlog(res);
	});
});

app.get("*", function (req, res) {
	res.send('<img src="/css/images/bowie.jpg">');
});

sql.sync().then(function() {
	console.log("Database initialized!");

app.listen(process.env.PORT || 3000, function() {
	console.log("Your server is available at localhost:3000!");
	});
});
