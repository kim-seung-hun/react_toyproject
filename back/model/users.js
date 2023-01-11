const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        user_name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  // static associate(db) {
  //   db.User.hasMany(db.Board, { foreignKey: "user_id", sourceKey: "id" });
  //   db.User.hasMany(db.Reply, { foreignKey: "user_id", sourceKey: "id" });
  // }
}

module.exports = User;
