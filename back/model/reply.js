const Sequelize = require("sequelize");
const moment = require("moment");

class Reply extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        reply: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        board_id: {
          type: Sequelize.INTEGER,
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
        modelName: "Reply",
        tableName: "replys",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Reply.belongsTo(db.Board, { foreignKey: "board_id", sourceKey: "id" });
    db.Reply.belongsTo(db.User, { foreignKey: "user_id", sourceKey: "id" });
  }
}

module.exports = Reply;
