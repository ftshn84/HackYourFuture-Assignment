import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from exercise 1!");
});

app.get("/currentYear", (req, res) => {
  res.send(new Date().getFullYear())
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
