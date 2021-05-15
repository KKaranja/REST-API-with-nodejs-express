import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";

// initialize express app
const app = express();
// port of the application
const PORT = 5000;
// initialize the body-parser middleware
app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello from homepage!");
});

// making the app to listen to incoming request
app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
