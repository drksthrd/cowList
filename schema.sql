CREATE DATABASE cowList;

USE cowList;

CREATE TABLE cows (
  id INT AUTO_INCREMENT,
  name VARCHAR(50),
  description VARCHAR(300),
  PRIMARY KEY (id)
)