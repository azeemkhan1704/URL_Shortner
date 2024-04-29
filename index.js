const express = require('express');
const { connectToMongoDb } = require("./db");
const urlRoute = require('./routes/url');

const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://127.0.0.1:27017/shortUrl").then(() => console.log("MongoDb connected"));

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));