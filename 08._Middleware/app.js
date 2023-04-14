import express from "express";
const app = express();

function houseButler(req, res, next) {
    console.log("This way, please!");
    next();
}

app.use("room", houseButler);

import roomRouter from "./routers/roomRouters.js"
app.use(roomRouter);

function guard(req, res, next) {
    if (req.query.name === "Dani") {
        req.name = req.query.name;
        next();

    } else {
        res.send({ message: "You are not allowed in!" })
    };
}

app.get("/frontdoor", guard, (req, res, next) => {

    res.send({ message: `Please enter! ${req.name}` });
});


app.get("/room", (req, res, next) => {

    res.send({ message: "I am in room 1" });
    //next();
});

app.get("/room", (req, res) => {
    res.send({ message: "I am in room 2" });
});



app.get("*", (req, res) => {
    res.send("<h1>404 - Not Found</h1>");
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
