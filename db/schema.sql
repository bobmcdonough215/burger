DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table wishes.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255),
  devoured BOOLEAN,
  PRIMARY KEY (id)
);