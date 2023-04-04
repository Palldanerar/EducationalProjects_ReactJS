const express = require("express");
const userRouter = require("./routes/user.routes");

const PORT = process.env.POST || 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Мой первывй сервер!");
});

app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Сервер работает на ${PORT} порту`);
});
