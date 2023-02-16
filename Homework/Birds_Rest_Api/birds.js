const express = require("express");
const app = express();

app.use(express.json());

app.listen(8080);


//Get Requests

//birds     ->  http://localhost:8080/birds
app.get("/birds", (req, res) => {
    res.send({ All_birds: birds });
});

//birds/id  -> http://localhost:8080/birds/1
app.get("/birds/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const bird = getBirdById(id);
    if (bird) {
        res.send({ Chosen_bird: bird });
    } else {
        res.send("No bird was found with id: " + id);
    };
});

function getBirdById(id) {
    let chosenBird = null;
    birds.forEach(element => {
        if (element.id === id) {
            chosenBird = element;
        };
    });
    return chosenBird;
};

//Birds data

const blueJay = {
    "id": 1,
    "name": "Blue Jay",
    "description": "A nice blue bird."
};

const stork = {
    "id": 2,
    "name": "Stork",
    "description": "Eats frogs."
};

const swallow = {
    "id": 3,
    "name": "Swallow",
    "description": "Has fork like tail feathers."
};

const birds = [blueJay, stork, swallow];