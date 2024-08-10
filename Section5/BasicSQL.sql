/*creates table of */
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);


/*adds in user*/
INSERT INTO users (name, email) 
VALUES ('Sample Name', 'samplename@gmail.com');

/*added in second user to showcase following statement can retrieve all users*/
INSERT INTO users (name, email) 
VALUES ('Test User', 'testuser@gmail.com');

/*retrieves all users*/
SELECT * FROM users; 