ALTER table Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

select * from Actor;

ALTER TABLE Actor CHANGE gender sex VARCHAR(100);

select * from Actor;

INSERT INTO Actor VALUES("03", "Antonio Fagundes", "500000", "1949-04-18", "male", "Director");

SELECT * from Actor;

UPDATE Actor SET name = "Moacir Franco" WHERE id = "003";

SELECT * from Actor;

UPDATE Actor SET name = "Moacir Franco" WHERE id = "03";

INSERT INTO Actor VALUES("004", "Juliana Paes", "500000", "1980-05-18", "female", "NotDirector");

UPDATE Actor SET name = "JULIANA PÃES" where id = "004";

Select * from Actor;

UPDATE Actor set id = "003" where id = "03";

Select * From Actor;

UPDATE Actor set name = "Juliana Paes" where name = "JULIANA PÃES" ;

SELECT * from Actor;

INSERT INTO Actor VALUES("005", "Antonio Fagundes", "500000", "1949-04-18", "male", "Director");

Select * from Actor;

UPDATE Actor set name = "Miguel Falabela" where id = "008";

INSERT INTO Actor VALUES ("006", "Fernanda Montenegro", "500000", "1950-05-11", "female", "Director");

DELETE from Actor WHERE name = "Fernanda Montenegro";

Select * FROM Actor;

DELETE FROM Actor WHERE salary > 1000000 AND gender = "male";

SELECT * from Actor;

DELETE FROM Actor WHERE salary > 1000000 AND sex = "male";

SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE sex = "female";

SELECT AVG(salary) from Actor;

SELECT MAX(salary) from Actor;

SELECT MIN(salary) from Actor where sex = 'female';

SELECT COUNT(*) from Actor where sex = 'female';

SELECT SUM(salary) from Actor;

SELECT * FROM Actor LIMIT 3;

SELECT * FROM Actor ORDER BY name ASC;

SELECT * FROM Actor ORDER BY name ASC LIMIT 4;

SELECT * FROM Actor
WHERE sex = 'female'
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), sex
FROM Actor
GROUP BY sex;

ALTER table Actor CHANGE sex gender VARCHAR(100);

select * from Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name AS 'Organizado' from Actor ORDER by name DESC;

SELECT name, salary AS 'Ordem Salarial' from Actor ORDER by salary ASC;

SELECT name, salary AS 'Os 3 maiores salários' from Actor ORDER by salary desc LIMIT 3;

SELECT AVG(salary) AS 'Female Average'from Actor where gender = 'female';
SELECT AVG(salary) AS 'male Average'from Actor where gender = 'male';

SELECT AVG(salary), gender FROM Actor GROUP BY gender;

Select * from Filmes;

alter table Filmes ADD Column playing_limit_date DATE;

select * from Filmes;

ALTER TABLE Filmes MODIFY column avaliacao FLOAT;

SELECT * from Filmes;

UPDATE  Filmes SET playing_limit_date = "2021-01-01" where id = 1;

select * from Filmes;

DELETE from Filmes where id = 4;

SELECT * from Filmes;

UPDATE Filmes SET sinopse = "tentativa de sinopse" where id = 4;

SELECT * from Filmes;

update Filmes SET avaliacao = 7.5 where id = 1;

SELECT * from Filmes;

SELECT COUNT(*) from Filmes where avaliacao > 7;

SELECT AVG(avaliacao) from Filmes;

SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE();

SELECT * from Filmes;

SELECT count(*) FROM Filmes WHERE CURDATE() < data_lancamento;

SELECT nome, avaliacao from Filmes ORDER BY avaliacao DESC LIMIT 1;

SELECT nome, avaliacao from Filmes ORDER BY avaliacao ASC LIMIT 1;

SELECT nome from Filmes ORDER BY nome ASC;

SELECT * from Filmes;

SELECT * from Filmes where CURDATE() < playing_limit_date LIMIT 3;

SELECT nome, avaliacao from Filmes ORDER BY avaliacao DESC LIMIT 3;
