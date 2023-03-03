'use srtict'

//import the express framework 
const express = require('express');

//import the cors library to open the server for all clients request 
const cors = require('cors');

//import data.json 
const data = require('./Movie Data/data.json'); 
const server = express(); 

server.use(cors()); 

const PORT= 2000; 

//listen on port 2000
server.listen(PORT, ()=> {
    console.log(`The server is listening now on the port: ${PORT}`); 
})

function Movie(title, poster_path, overview){
    this.title= title; 
    this.poster_path= poster_path; 
    this.overview= overview; 
}

//home route 
server.get('/', (req,res)=> {
    let Movie1 = new Movie(data.title, data.poster_path, data.overview); 
    res.send(Movie1); 
})

//Favorite route 
server.get('/favorite', (req,res)=>{
    res.send("Welcome to Favorite Page"); 
})

// Handle errors 
server.get('*',(req,res)=>{
    res.status(500).send("Sorry, something went wrong"); 
})

