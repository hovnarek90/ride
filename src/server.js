import express from "express";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";

const app = express();
const port = 3008;

// Define the path to your JSON file
const userJsonPath = path.join("src", "user.json");

app.use(bodyParser.json());
app.use(express.static("public"));

// Route to handle user registration
app.post("/register", (req, res) => {
  const userData = req.body;

  // Read existing user data from JSON file
  const existingData = fs.readFileSync(userJsonPath, "utf-8");
  const users = JSON.parse(existingData);

  // Add the new user data
  users.push(userData);

  // Write the updated data back to the file
  fs.writeFileSync(userJsonPath, JSON.stringify(users, null, 2), "utf-8");

  // Respond with a success message
  res.json({ message: "Registration successful!", user: userData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
