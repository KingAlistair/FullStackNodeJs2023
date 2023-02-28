const express = require("express");

const app = express();

app.use(express.json());

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});

app.get("/birds", (req,res) => {
    res.send({data: birds});
});

app.get("/birds/:id", (req,res) => {
    const foundBird = birds.find(bird => bird.id === Number(req.params.id));

    res.send({data: foundBird});
});

app.post("/birds", (req,res) => {
    const newBird = req.body;
    currentId++;
    newBird.id = currentId;
    birds.push(newBird);
    res.send({});
})

app.delete("birds/:id", (req, res) => {
    const foundIndex = birds.findIndex(bird => bird.id === Number(req.params.id));
    if(foundIndex === -1) {
        res.status(404).send({data: foundIndex, message: "No bird was found with id: " + req.params.id})
    } else {
       const deletedBird = birds.splice(foundIndex, 1)[0];
       res.send(deletedBird);
    }
})

let = currentId = 3;

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