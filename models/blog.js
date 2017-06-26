const Sequelize = require("sequelize");
const sql = require("../util/sql");

module.exports = sql.define("foodblog", {
	id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},

	subject: {
			type: Sequelize.STRING(50),
			allowNull: false,
		},

	body: {
		type: Sequelize.STRING(500),
		allowNull: true,
	},


});
