const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const { readdirSync } = require("fs");
const cors = require("cors");
const app = express();

// database

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
