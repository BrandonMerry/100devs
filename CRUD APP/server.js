const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path =require('path');


const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

// log request with morgan
app.use(morgan('tiny'));

// parse req to body-parser
app.use(bodyparser.urlencoded({extended: true}))

// set view engine 
app.set("view engine", "ejs");

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// respond the index.ejs file
app.get('/', (req, res) =>{
    res.render('index');
})

// route for add new user from btn to form
app.get('/add-user', (req, res) =>{
    res.render('add_user');
})

// route from update btn to user form
app.get('/update-user', (req, res) =>{
    res.render('update_user');
})

app.listen(3000, () => {console.log(`server running on http://localhost:${PORT}`)});
