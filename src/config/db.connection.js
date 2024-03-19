require("dotenv").config();
const { connect } = require("mongoose");

const connects = async () => {
  return connect(process.env.DB_URL)
    .then((res) => {
      console.log("db connection established");
    })
    .catch((err) => {
      console.log("error connecting");
    });
};

module.exports = connects;
