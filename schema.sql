/*DROP TABLE if EXISTS favRecipes; 

CREATE TABLE if NOT EXISTS favRecipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    readyInMin VARCHAR(255),
    summary VARCHAR(10000) 
    );

*/
DROP TABLE if EXISTS favMovies; 

CREATE TABLE if NOT EXISTS favMovies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    poster_path VARCHAR(255),
    overview VARCHAR(10000) 
    );