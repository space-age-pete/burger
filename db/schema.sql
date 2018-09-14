-- Created the DB "burgers_db" (only works on local connections)
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "burgers" 
CREATE TABLE burgers
(
  id int AUTO_INCREMENT,
  burger_name varchar (30) NOT NULL,
  devoured boolean NOT NULL,
  PRIMARY KEY (id)
);