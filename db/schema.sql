schema_and_seeds
DROP DATABASE IF EXISTS arcade_manager_db;
CREATE DATABASE arcade_manager_db;

USE arcade_manager_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE locations (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL
);

CREATE TABLE games (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cost DECIMAL(10,2) NOT NULL,
  manufacturer VARCHAR(255) NOT NULL,
  type_of_cabinet VARCHAR(255) NOT NULL,
  has_tickets TINYINT(1) NOT NULL,
  has_prizes TINYINT(1) NOT NULL,
  locations_id INT NOT NULL,
  FOREIGN KEY (locations_id) REFERENCES locations(id)
);
