import express from "express";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

const app = express();
const port = 3008;

const userJsonPath = path.join(process.cwd(), "user.json");
const secretKey = "your-secret-key"; // Replace with your secret key

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (token) {
      const decoded = jwt.verify(token, secretKey);
      const userId = decoded.id;

      const existingData = fs.readFileSync(userJsonPath, "utf-8");
      const users = JSON.parse(existingData);
      const user = users.users.find((u) => u.id === userId);

      if (user) {
        user.status = "Active";
        fs.writeFileSync(userJsonPath, JSON.stringify(users, null, 2), "utf-8");
      }
    }
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    next();
  }
});

app.post("/register", (req, res) => {
  try {
    const userData = req.body;
    const existingData = fs.readFileSync(userJsonPath, "utf-8");
    const users = JSON.parse(existingData);

    userData.id = uuidv4();
    userData.status = "Active";
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

app.post("/login", (req, res) => {
  try {
    const { logEmail, logPass } = req.body;
    const existingData = fs.readFileSync(userJsonPath, "utf-8");
    const users = JSON.parse(existingData);
    const user = users.users.find((u) => u.phone === logEmail || u.id === logEmail);

    if (user || user.password != logPass) {
      res.status(401).json({ error: "Incorrect Password or Email(Phone num)!" });
    } else {
      const token = jwt.sign({ id: user.id }, secretKey);
      if (user && user.status == "Passive") {
        user.status = "Active";
        fs.writeFileSync(userJsonPath, JSON.stringify(users, null, 2), "utf-8");
      }
      res.json({ message: "Login successful", user: { ...user, token } });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Failed to log in" });
  }
});

app.post("/logout", (req, res) => {
  try {
    // Your logout logic here
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (token) {
      // Verify the token and extract the user ID
      const decoded = jwt.verify(token, secretKey);
      const userId = decoded.id;

      // Update the user's status to "Passive"
      const existingData = fs.readFileSync(userJsonPath, "utf-8");
      const users = JSON.parse(existingData);
      const user = users.users.find((u) => u.id === userId);

      if (user) {
        user.status = "Passive";
        fs.writeFileSync(userJsonPath, JSON.stringify(users, null, 2), "utf-8");
      }

      // Send a response indicating successful logout
      res.json({ message: "Logout successful" });
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error("Error logging out:", error);
    res.status(500).json({ error: "Failed to log out" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
