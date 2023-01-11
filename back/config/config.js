require("dotenv").config();

const config = {
  dev: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "test50",
    host: "localhost",
    dialect: "mysql",
  },
};

module.exports = config;
