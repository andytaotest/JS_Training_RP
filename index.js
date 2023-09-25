const express = require("express");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    // res.send("<h1>hello world</h1>");
    res.render("index.ejs", {
        "name": "John",
        "luckyNumber": Math.random() * 100
    });
});

app.get("/about-us", function(req, res) {
    res.send("about us");
});

app.get("/hello/:firstName", function(req, res) {
    res.send("Hello " + req.params.firstName);
})

app.listen(8080, function() {
    console.log("server running on 8080");
});