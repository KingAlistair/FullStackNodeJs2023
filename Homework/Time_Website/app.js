const express = require("express");
const app = express();

//app.use(express.static(__dirname + "/public/"));
app.use(express.static("public"));
app.listen(8080);



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/mainpage.html")
});


app.get("/api/timezones", (req, res) => {
    const date = new Date;
    const timeZones = Intl.supportedValuesOf('timeZone');
    const cities = [];
    timeZones.forEach((timeZone) => {

        cities.push({
            name: timeZone,
            date: date.toLocaleString("en-US", { timeZone: timeZone })
        });
    });
    res.send({ data: cities });
});