const Sequelize = require("sequelize");
require("dotenv").config();

// create connection to our db
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: "localhost",
//       dialect: "mysql",
//       port: 3306,
//     });

// module.exports = sequelize;
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST, process.env.DB_PORT);
const sequelize = new Sequelize('ftchr_db', 'root', 'password', {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT,
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1
  }
});


module.exports = sequelize;
