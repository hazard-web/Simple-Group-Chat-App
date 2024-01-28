const express = require("express");
const fs = require('fs');
const bodyParser = require('body-parser');


const app = express();

const loginRoute = require('./routes/login');
const messageRoute = require('./routes/message');

app.use(bodyParser.urlencoded({extended : false}));


app.use(messageRoute);
app.use(loginRoute);

app.use((re,res,next) => {
    res.status(404).send(`<h1>Page Not Found</h1>`);
})


const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
app.on('error', (error) => {
    if(error.code === EADDRINUSE){
        console.log(`A ${port} port is already in use`);
    }else{
        console.log(`An error has occurred: ${error.message}`);
    }
});









{/* */}