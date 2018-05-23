-- create database
CREATE DATABASE nodecrud;

-- USING THE DATABASE
USE nodecrud;

-- CREATING A TABLE
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- show all tables
SHOW TABLES;

-- TO DESCRIBE TABLE
DESCRIBE customer;