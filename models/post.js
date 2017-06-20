const Sequelize = require("sequelize");
const sql = require("../util/sql");

module.exports = sql.define("foodblog", {
	id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},

	subject: {
			type: Sequelize.STRING(100),
			allowNull: true,
		},

	body: {
		type: Sequelize.STRING(5000),
		allowNull: true,
	},

});
