 import express from "express";
 import { bootstrap } from "./app.controller";
 import {config} from "dotenv";
config()
const app = express()
const port = 3000
bootstrap(app,express)

app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

app.listen(port, () => console.log(`Server running on port ${port}`))
















