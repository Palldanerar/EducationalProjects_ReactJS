const express = require("express");

const PORT = process.env.POST || 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Мой перывй сервер!");
});

app.listen(PORT, () => {
  console.log(`Сервер работает на ${PORT} порту`);
});
