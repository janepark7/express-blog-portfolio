const Blog = require("../models/foodblogpost.js");

const foodblog = {
	getAll: function() {
		return Blog.findAll();
	},

	add: function(post) {
			return Blog.create({name: foodblog});
	},
};

module.exports = foodblog;
