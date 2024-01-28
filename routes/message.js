const express = require("express");
const fs = require('fs');

const route = express.Router();

route.get('/', (req,res,next) =>{
    fs.readFile('chatdata.txt', (err,data) => {
        if(err){
            console.log(err);
            res.status(500).send(`<h1>Error occured!</h1>`)
            data = 'NO chat exists'
        }
        res.send(`${data}<form action="/" method="POST">
            <div>
            <input type = "text" name = "message" placeholder = "Start Typing" id="message"></input>
            <input type = "hidden" name = "username" id='username'></input>
            </div> 
            <button type="submit">Send Message</button>
            </form>`)
    })
});

route.post("/", (req,res,next) => {
    console.log(`${req.body.username}:${req.body.message}`);
    fs.writeFile('chatdata.txt', `${req.body.username}:${req.body.message}\n`, {flag:'a'}, (err) =>
    err ? console.log(err) : res.redirect('/')
    );
});




module.exports = route;