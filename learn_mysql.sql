CREATE DATABASE learn_mysql;
use learn_mysql;
show tables;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
describe users;
INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com');
INSERT INTO users (username, email) VALUES ('', 'none@example.com');
UPDATE users SET email = 'new_email@example.com' WHERE id = 1;
DELETE FROM users WHERE id = 1;

SELECT * FROM users;
