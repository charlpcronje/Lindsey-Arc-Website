CREATE DATABASE lindsey_arc;
CREATE USER 'lindsey_arc_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON lindsey_arc.* TO 'lindsey_arc_user'@'localhost';
FLUSH PRIVILEGES;