import express from "express";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3008; 

const userJsonPath = path.join(process.cwd(), "user.json");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/register", (req, res) => {
  try {
    const userData = req.body;
    const existingData = fs.readFileSync(userJsonPath, "utf-8");
    const users = JSON.parse(existingData);

    userData.id = uuidv4();
    users.users.push(userData);
    
    fs.writeFileSync(userJsonPath, JSON.stringify(users, null, 2), "utf-8");

    res.json({ message: "Registration successful!", user: userData });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

app.get("/users", (req, res) => {
  try {
    const existingData = fs.readFileSync(userJsonPath, "utf-8");
    const users = JSON.parse(existingData);
    res.json(users);
  } catch (error) {
    console.error("Error reading user data:", error);
    res.status(500).json({ error: "Failed to retrieve user data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
