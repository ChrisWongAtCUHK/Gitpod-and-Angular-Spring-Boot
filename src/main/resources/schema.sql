DROP TABLE user IF EXISTS;

CREATE TABLE user (
  id integer NOT NULL AUTO_INCREMENT,
  email varchar(255),
  first_name varchar(255),
  last_name varchar(255),
  PRIMARY KEY (id)
);