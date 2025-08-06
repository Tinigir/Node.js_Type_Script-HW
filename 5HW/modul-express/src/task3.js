import express from "express";

const app = express();

app.put("/", (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "text/plain")
    .send("PUT-запрос обработан");
});

app.delete("/", (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "text/plain")
    .send("DELETE-запрос обработан");
});

app.listen(3000, () => {
  console.log("Server running");
});
