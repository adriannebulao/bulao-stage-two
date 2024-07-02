const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sysdev_recruitment",
});

connection.connect();

connection.end();

// CREATE DATABASE sysdev_recruitment;
// USE sysdev_recruitment;
// CREATE TABLE programming_languages(id INT NOT NULL AUTO_INCREMENT, favorites VARCHAR(255), PRIMARY KEY (id));
// INSERT INTO programming_languages (favorites) VALUES ("Java");
