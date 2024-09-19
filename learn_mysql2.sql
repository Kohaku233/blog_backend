CREATE INDEX idx_username ON users (username);
SHOW INDEX FROM users;
select * from users;
SELECT * FROM users WHERE username = 'kohaku2';
SELECT * FROM users WHERE email = 'kohaku@example.com';

CREATE VIEW user_emails AS
SELECT username, email FROM users;
SELECT * FROM user_emails;
ALTER VIEW user_emails AS
SELECT username, email, created_at, id FROM users;

DELIMITER //
CREATE PROCEDURE GetUserByUsername(IN user_name VARCHAR(50))
BEGIN
    SELECT * FROM users WHERE username = user_name;
END //
DELIMITER ;
CALL GetUserByUsername('kohaku2');

START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE username = 'john_doe';
UPDATE accounts SET balance = balance + 100 WHERE username = 'jane_doe';
COMMIT;

use learn_mysql;
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


drop  table orders ;
delete from users where id = 2;