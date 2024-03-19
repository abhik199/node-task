const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
const connect = require("./config/db.connection");
const errorHandler = require("./middleware/errorHandler");

require("./passport")(passport);

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/root.routes"));

app.use(errorHandler);

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running here 👉 ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Server running failed`);
  });
