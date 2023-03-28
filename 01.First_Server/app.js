//import
const { response } = require("express");
const express = require("express"); //import express
//instanciate
const app = express(); //initialize express

//Let us passing the body of th Json
app.use(express.json());



app.listen(8080); // 8080 is http dev port

app.get("/", (req, res) => {
    //Json format: { message: "Our first route"}
    res.send({ message: "Our first route" });
});


app.get("/proxy", (req,res) => {
fetch('https://www.google.com')
.then(response => response.text())
.then(result => res.send(result));
});

let bicycleSpin = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpin += 1;
    res.send({ message: "Bicycle is spinning " + bicycleSpin })
});

let dinoSays = "Dino was kicked, he says: ow ow ow"
app.get("/dino", (req, res) => {
    res.send({ message: dinoSays })
})


app.get("/about", (req, res) => {
    res.send(`
    <h1>About</h1>`);
});

// /bat?adjective=spooky
app.get("/bat", (req, res) => {
    console.log(req.query);
    res.send({ message: `The bat is ` + req.query.adjective });
});

// /bottle/large
app.get("/bottle/:bootleSize", (req, res) => {
    console.log(req.params)
    res.send({ bottleSize: req.params.bottleSize });
});

app.post("/package", (req, res) => {
    res.send({ message: req.body })
});

app.get("/time", (req, res) => {
    res.send({
        timeUTC: new Date(),
        timeLocal: Date(),
        unixTimeStampe: Date.now()
    });
});

app.get("/time/day", (req, res) => {
    res.send({ day: getDayName(new Date(), "en-EN")})
})

var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

app.get("/time/month", (req, res) => {
    res.send({ month: month[new Date().getMonth()]})
})


function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}
