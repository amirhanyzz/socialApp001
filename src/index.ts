 import express from "express";
 import { bootstrap } from "./app.controller";
 import {config} from "dotenv";
config()
const app = express()
const port = 3000
bootstrap(app,express)

app.use("/", (req, res) => {
  res.json({
    message: "API is running 🚀",
    success: true
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`))
















