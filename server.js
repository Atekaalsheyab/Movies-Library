'use srtict'

//import the express framework 
const express = require('express');

//import the cors library to open the server for all clients request 
const cors = require('cors');

//import data.json 
const data = require('./Movie Data/data.json');
const server = express();

require('dotenv').config();



//1. import the pg library in order to connect to the DBMS
const pg = require('pg');
///2. create obj from Client, i will use this obj to connect with demo13 database  
const client = new pg.Client(process.env.DATABASE_Movie_URL);




server.use(cors());
// middleware functions 
server.use(express.json()); // allow me to parse the body to json format


const PORT = 2000;
//3. connect the server with the demo13 database 
client.connect()
//After connecting to the demo13 database, the server can now listning on the port 2000
    .then(() => {
        //listen on port 2000
        server.listen(PORT, () => {
            console.log(`The server is listening now on the port: ${PORT}`);
        })
    })




function Movie(title, poster_path, overview) {
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;
}

//home route 
server.get('/', (req, res) => {
    let Movie1 = new Movie(data.title, data.poster_path, data.overview);
    res.send(Movie1);
})

//Favorite route 
server.get('/favorite', (req, res) => {
    res.send("Welcome to Favorite Page");
})

//Add fav Recipe 
//server.post('/favRecipes', addfavRecipeshandler); 

//Add fav movie 
server.post('/favMovies', addfavMoviesHandler);

//get fav movies 
server.get('/favMovies', getfavMoviesHandler);

// route to get data from specific table 
// favRecipe route 
//server.get('/favRecipes', getfavRecipesHandler);


// Handle errors 
server.get('*', (req, res) => {
    res.status(500).send("Sorry, something went wrong");
})


/*
// Handlers 
function getfavRecipesHandler(req, res) {
    // return all fav Recipes (favRecipes table conent)
    const sql = `SELECT * from favRecipes`; 
    client.query(sql)
    .then((data)=>{
        // the data will always be inside the rows
        res.send(data.rows);
    }) 
}


function addfavRecipeshandler(req,res){
    const recipe= req.body; 
    const sql = `INSERT INTO favrecipes (title, readyInMin, summary) VALUES ($1,$2,$3) RETURNING *;`;    
    const values = [recipe.title, recipe.readyInMin, recipe.summary]

    client.query(sql,values )
    .then((data)=>{
        res.send("your data was added"); 
    })
}
*/
function addfavMoviesHandler(req, res){
    const movie= req.body; 
    const sql = `INSERT INTO favMovies (title, poster_path, overview) VALUES ($1,$2,$3) RETURNING *;`;
    const values =[movie.title, movie.poster_path, movie.overview];

    client.query(sql, values)
    .then((data)=>{
        res.send("the data was added"); 

    })
}

function getfavMoviesHandler(req, res){
    const sql = `SELECT * from favMovies`; 
    client.query(sql)
    .then((data)=>{
        res.send(data.rows); 
    })
}