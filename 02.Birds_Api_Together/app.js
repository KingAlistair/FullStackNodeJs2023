const express = require("express");

const app = express();

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


const birds = [{
    id: 1, name: "Blue Jay", 
}];