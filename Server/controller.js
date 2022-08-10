// table stuff here
require("dotenv").config();
const Sequelize = require("sequelize");
const { DATABASE_URL } = process.env;
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

let globalId = 0;

module.exports = {
  getWinner: (req, res) => {
    res.status(200).send(Winners);
  },
  createWinner: (req, res) => {
    console.log(req.body);
    const { gameTitle, winnerName, score } = req.body;
    sequelize.query(
      `INSERT INTO winners (gameTitle, winnerName, score) VALUES ('{gameTitle}','${winnerName}', ${score})`
    );
  },
  seed: (req, res) => {
    sequelize
      .query(
        `drop table if exists winners;
        create table winners (
            id serial primary key,
            gameTitle varchar(255),
            winnerName varchar(255),
            score int);
            `
      )
      .then(() => {
        console.log("DB seeded!");
        res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};