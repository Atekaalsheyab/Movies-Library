DROP TABLE if EXISTS favRecipes; 

CREATE TABLE if NOT EXISTS favRecipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    readyInMin VARCHAR(255),
    summary VARCHAR(10000) 
    );
