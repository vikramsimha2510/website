const express = require("express");
const path = require("path");
const fs = require("fs")
const app = express();
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
})
app.get("/style", (req, res) => {
    res.sendFile(path.join(__dirname, "/style.css"));
})
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/about.html"));
})
app.get("/rohith", (req, res) => {
    res.sendFile(path.join(__dirname, "/rohith.html"));
})
app.listen(3000, () => console.log("Started express server"));