const users = require("./mocks/users.json");
const express = require("express");
//const bodyParser = require("body-parser");
const path = require("path");
const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// app.get("/ping", function (req, res) {
//   return res.send("pong");
// });

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.get("/dist/*.js", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist/bundle.js"));
// });

app.get("/api/users", function (req, res) {
  res.json(users);
});

// app.get("/api/user/:id", function (req, res) {
//   const { id } = req.params;
//   const foundUser = users.find((user) => user.id === id);
//   res.json(foundUser);
// });

// app.get("/api/users", function (req, res) {
//   res.json(users);
// });

// app.post("/api/user", function (req, res) {
//   console.log("req.body", req.body);
//   const { id, username } = req.body;
//   users.push({
//     id,
//     username,
//   });
//   res.json(users);
// });

const port = 3000;
app.listen(port, () => console.log("App is listening on localhost:3000"));
