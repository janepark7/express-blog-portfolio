const express = require("express");
const router = express.Router();

// router.get("/imagegallery", function (req, res){
// 	res.render("template", {
// 		page: "imagegallery",
// 		data: null,
// 	});
// });

router.get("/", function(req, res){
	res.render("template", {
		page: "index",
		data: null,
	});
});

router.get("/foodblog", function (req, res){
	res.render("foodblog",{
		page: "foodblog",
		data: true,
	});
});

router.get("/form", function (req, res){
	res.render("form",{
		page: "form",
		data: true,
	});
});


module.exports = router;
