import express from "express";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";

const app = express();
const port = 3008;

const userJsonPath = path.join("src", "user.json");

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/register", (req, res) => {
  const userData = req.body;

  const existingData = fs.readFileSync(userJsonPath, "utf-8");
  const users = JSON.parse(existingData);

  users.push(userData);

  fs.writeFileSync(userJsonPath, JSON.stringify(users, null, 2), "utf-8");

  res.json({ message: "Registration successful!", user: userData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
