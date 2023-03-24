import express from "express";
const app = express();

import jokes from "./util/jokes.js";

import path from "path";

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

//SSR, we are just sending not rendering at the moment

import renderPage from "./util/templateEngine.js";
const frontPagePath = "./public/pages/frontpage/frontpage.html";
const jokePagePath =  "./public/pages/jokes/jokes.html";
const questPagePath = "./public/pages/quests/quests.html";
const contactPage = "./public/pages/contact/contact.html"

app.get("/", (req,res) => {
   res.send(renderPage(frontPagePath, "Frontpage"));
});

app.get("/quests", (req,res)=> {
   res.send(renderPage(questPagePath, "Quests"));
});

app.get("/jokes", (req,res) => {
   res.send(renderPage(jokePagePath, "Jokes"));
});

app.get("/contact", (req,res) => {
   res.send(renderPage(contactPage, "Contact"));
});

app.post("/api/contact", (req,res)=>{
   res.send(req.body);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error)=>{
     if (error){
        console.log(error);
     } else {
        console.log("Server running on port: " + PORT);
     }
}); 
