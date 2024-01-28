const express = require("express");
const fs = require('fs');

const route = express.Router();

route.get('/login', (req,res,next) =>{
    fs.readFile('chatdata.txt', (err,data) => {
        if(err){
            console.log(err);
            res.status(500).send(`<h1>Error occured!</h1>`)
        }
        res.send(`<form action="/login" method="POST">
            <div>
            <input type = "text" name = "username" id='username' placeholder="Username"></input>
            </div>
            <button type="submit">Login</button>
            </form>`)
    })
});

route.post("/login", (req,res,next) => {
    console.log(`${req.body.username}`);
    fs.writeFile('chatdata.txt', `${req.body.username}`, {flag:'a'}, (err) =>
    err ? console.log(err) : res.redirect('/')
    );
});

module.exports = route;