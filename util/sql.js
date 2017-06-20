const Sequelize = require("sequelize");

let sql;

if (process.env.DATABASE_URL) {
	sql = new Sequelize(process.env.DATABASE_URL);
}

else {
	sql = new Sequelize({
		database: "foodblog",
		username: "postgres",
		password: "postgres123",
		host: process.env.DB_HOST || "localhost",
		port: process.env.DB_PORT || 5432,
		dialect: "postgres",
	});
}

module.exports = sql;
