import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>My node app </h1>");
});

app.listen(9500, () => {
  console.log("App running");
});
