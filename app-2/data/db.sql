create database prueba;
use prueba;
CREATE TABLE books(
   id int primary key not null auto_increment,
   title VARCHAR(25),
   author VARCHAR(25),
   editorial VARCHAR(25)
);

INSERT INTO books (title, author, editorial) values
('La Iliada', 'Homero', 'Antisana');
INSERT INTO books (title, author, editorial) values
('Romero y Julieta', 'Homero', 'Christian');
INSERT INTO books (title, author, editorial) values
('Escritos', 'Pepito', 'Melanie');
INSERT INTO books (title, author, editorial) values
('Sucesos', 'Homero', 'Anthony');
INSERT INTO books (title, author, editorial) values
('Cronologia', 'Homero', 'Anita');
INSERT INTO books (title, author, editorial) values
('El Saber', 'Homero', 'Analia');
INSERT INTO books (title, author, editorial) values
('El Amor', 'Homero', 'Andres');
INSERT INTO books (title, author, editorial) values
('El engaño', 'Homero', 'Amelia');


SELECT * FROM prueba.books;