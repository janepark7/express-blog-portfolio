const sql = require("../utility/sql");
const Sequelize = require("sequelize");

module.exports = sql.define("post", {
	id: {
			type: Sequelize.INTERGER,
			autoIncrement: true,
			primaryKey: true,
},

	subject: {
			type: Sequelize.STRING(100),
			allowNull: true,
		},

	body: {
		type: Sequelize.STRONG(5000),
		allowNull: true,
	},

	});
