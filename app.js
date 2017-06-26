require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.js");
const blog = require("./models/blog.js");
const sql = require("./util/sql.js");

app.set("view engine", "ejs");
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", indexRoutes);

function renderBlog(res, body) {
	blog.findAll().then(function(title) {
		res.render("blog", {
				title: title,
				body: body,
		});
	});
}

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/form", function(req, res) {
	res.render("form");
});


app.post("/blog", function(req, res) {
	blog.create({
		title: req.body.title,
		body: req.body.body,
	})
	.then(function() {
			renderBlog(res);
	});
});

app.get("/blog", function(req, res) {
	renderBlog(res);
});

// app.get("*", function (req, res) {
// 	res.send('<img src="/css/images/bowie.jpg">');
// });

sql.sync().then(function() {
	console.log("Database initialized!");

app.listen(process.env.PORT || 3000, function() {
	console.log("Your server is available at localhost:3000!");
	});
});
