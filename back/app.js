const express = require("express");
require("dotenv").config();
const cors = require("cors");
const session = require("express-session");
const { sequelize } = require("./model");
const userRouter = require("./router/user_router");
const boardRouter = require("./router/board_router");

const app = express();

const options = {
  origin: "http://localhost:3000",
};

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors(options));

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", userRouter);
app.use("/board", boardRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8000, () => {
  console.log("server running");
});
