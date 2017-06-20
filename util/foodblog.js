const Post = require("../models/post.js");

const foodBlog = {
	getAll: function() {
		Post.findAll();
	},

	add: function(post) {
			return Post.create({name: post});
	},
};

module.exports = foodBlog;
