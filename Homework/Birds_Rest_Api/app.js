const express = require("express");
const app = express();

app.use(express.json());
app.listen(8080);


//getAll
app.get("/birds", (req, res) => {
    res.send(birds);
});


//getById
app.get("/birds/:id", (req, res) => {
    const foundBird = birds.find(bird => bird.id === Number(req.params.id));

    res.send(foundBird);
});


//post
app.post("/birds", (req, res) => {
    const { name, description } = req.body;
    const newBird = {
      id: birds.length + 1,
      name,
      description
    };
    birds.push(newBird);
    res.send(newBird);
  });
  

//update
app.put("/birds/:id", (req, res) => {
    const foundIndex = birds.findIndex(bird => bird.id === Number(req.params.id));
    if (foundIndex !== -1) {
      const foundBird = birds[foundIndex];
      birds[foundIndex] = {...foundBird, ...req.body, id: foundBird.id};
      res.send({data: birds[foundIndex]});
    } else {
      res.status(404).send({ message: "Bird not found with id " + req.params.id });
    }
  });

  
//delete
app.delete("/birds/:id", (req, res) => {
    const index = birds.findIndex(bird => bird.id === Number(req.params.id));
    if (index !== -1) {
      birds.splice(index, 1);
      res.json({ message: "Bird deleted" });
    } else {
      res.send({ message: "Bird not found" });
    }
  });


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