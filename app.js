const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

mongoose
  .connect(
    "mongodb+srv://Beveky:9V0z2ksqRzWL0cxv@cluster0.190insn.mongodb.net/alldata?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
