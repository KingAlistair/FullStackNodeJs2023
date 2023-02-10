const app = require("express")();

app.listen(8080); // 8080 is http dev port

app.get("/", (req, res) => {
    res.send({ message: "Our first route" });
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


app.get("/about",(req, res) => {
    res.send(`
    <h1>About</h1>`)
});