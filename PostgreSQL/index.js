const express = require("express");

const PORT = process.env.POST || 8080;

const app = express();

app.listen(PORT, () => {
  console.log("Мой первый сервер!");
});
