const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://Aryan0914:aryan0914@internshipproject.lyal5py.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
