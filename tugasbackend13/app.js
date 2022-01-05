// import express dan routing
const express = require("express");
const router = require("./routes/api.js");
const bodyParser = require("body-parser");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(bodyParser.json());

// Menggunakan routing (router)
app.use(router);

// Mendefinisikan port.
app.listen(3000, () => console.log("Server running at http://localhost/3000"));
