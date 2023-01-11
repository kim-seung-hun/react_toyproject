const express = require("express");
require("dotenv").config();
const session = require("express-session");
const { sequelize } = require("./model");
const userRouter = require("./router/user_router");
const boardRouter = require("./router/board_router");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/user", userRouter);
app.use("/board", boardRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server running");
});
