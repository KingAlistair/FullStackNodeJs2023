const express = require("express");
const app = express();

module.exports = app;

app.use(express.static('public'));
app.listen(8080);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/mainpage/mainpage.html")
});

app.get("/api/time", (req, res) => {
    res.send({ data: cities });
})

//All timezones
const timeZones = Intl.supportedValuesOf('timeZone')

//Creating date and empty cities array;
let date = new Date;
const cities = []

//Creates city objects with name and date
createCitiesFromTimeZones(timeZones);

function createCitiesFromTimeZones(timeZones) {

    timeZones.forEach((timeZone) => {
    
        cities.push({
            name: timeZone,
            date: date.toLocaleString("en-US", {timeZone: timeZone})
        });
    return cities;
})};