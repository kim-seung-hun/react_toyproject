const Sequelize = require("sequelize");
const config = require("../config/config.js");
const User = require("./users");
const Board = require("./board");
const Reply = require("./reply");

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Board = Board;
db.Reply = Reply;

User.init(sequelize);
Board.init(sequelize);
Reply.init(sequelize);

User.associate(db);
Board.associate(db);
Reply.associate(db);

module.exports = db;
