const express = require("express");

const app = express();

app.use(express.static("public"));


const tanksUtil = require("./util/tanks.js");

const { getTanks, addTank } = require("./util/tanks.js");

console.log(getTanks());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
});

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html")
});

app.get("/museumguards", (req, res) => {
    res.sendFile(__dirname + "/public/museumguards/museumguards.html");
});

app.get("/api/guards", (req, res) => {
    if (req.query.passport === "theskyisblue") {
        return res.redirect("/api/tanks"); //returns - exit the functions instead of going on.
    };
        res.send({ message: "You are not allowed in!" });
});

app.get("/api/tanks", (req, res) => {
    res.send({ data: tanks });
});

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount })
});

app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount });
});

const tanks = [{
    "id": 1,
    "name": "Tiger",
    "nationality": "Germany"
}, {
    "id": 2,
    "name": "Leopard",
    "nationality": "Germany"
}];

let visitorCount = 0;

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    };
    console.log("Server is running on port:" + PORT);
});