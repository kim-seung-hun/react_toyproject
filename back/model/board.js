const Sequelize = require("sequelize");
const moment = require("moment");

class Board extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          get() {
            return moment(this.getDataValue("createdAt")).format(
              "MM-DD hh:mm:ss"
            );
          },
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Board",
        tableName: "boards",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  // static associate(db) {
  //   db.Board.belongsTo(db.User, { foreignKey: "user_id", sourceKey: "id" });
  //   db.Board.hasMany(db.Reply, { foreignKey: "board_id", sourceKey: "id" });
  // }
}

module.exports = Board;
