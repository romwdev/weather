DROP DATABASE weather;
CREATE DATABASE weather;
USE weather;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  zip_code INT
);