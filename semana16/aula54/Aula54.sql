SELECT * FROM Filmes;

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);

SELECT * FROM Filmes;

ALTER TABLE Filmes CHANGE id id VARCHAR(255);

SELECT * from Filmes;

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);

SELECT * from Rating;

INSERT INTO Rating VALUES('1', 'Filme maravilhoso', 8.5, '1');

SELECT * from Rating;

INSERT INTO Rating VALUES('2', 'Filme razoável', 7, '2');

INSERT INTO Rating VALUES('3', 'Melhor filme da minha vida', 10, '3');

SELECT * From Filmes;

INSERT INTO Rating VALUES('4', 'Ruim', 4, '4');

ALTER TABLE Filmes DROP column avaliacao;
SELECT * FROM Filmes;

DELETE from Filmes WHERE id = 1;

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

SELECT * from Actor;

SELECT * from Filmes;

INSERT INTO MovieCast VALUES('1','2');

SELECT * from MovieCast;

SELECT * FROM Filmes;
SELECT * from Actor;

INSERT INTO MovieCast VALUES('1','001');
INSERT INTO MovieCast VALUES('1','005');

INSERT INTO MovieCast Values('2','003');
INSERT INTO MovieCast Values('2','001');

INSERT INTO MovieCast Values('3','002');
INSERT INTO MovieCast Values('2','006');

DELETE from Actor WHERE id=001;

SELECT * FROM Rating;

SELECT * FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.movie_id;

SELECT Rating.id, nome.Filmes from Filmes INNER JOIN Rating ON Filmes.id = Rating.movie_id;

SELECT * from Filmes;

SELECT Filmes.nome, Filmes.id, Rating.rate FROM Filmes  inner JOIN Rating ON Filmes.id = Rating.movie_id;

SELECT * FROM Rating;

SELECT Filmes.id ,Filmes.nome, Rating.rate, Rating.comment From Filmes LEFT JOIN Rating ON Filmes.id = Rating.movie_id;

SELECT * FROM Filmes;
SELECT * FROM Rating;

SELECT MovieCast.movie_id AS "ID Filme" , Filmes.nome AS "Nome do Filme",
MovieCast.actor_id as "ID Ator" FROM MovieCast JOIN Filmes ON Rating.movie_id = MovieCast.movie_id;

SELECT Filmes.id AS "ID do Filme", Filmes.nome AS "Nome da obra", 
Rating.rate AS "Classificação da obra",
Rating.comment As "Comentários sobre a obra" 
FROM Filmes LEFT JOIN Rating ON Filmes.id = Rating.movie_id;

SELECT * FROM Rating;

SELECT  Filmes.nome AS "Nome do filme", AVG(Rating.rate) AS "Avaliação média" FROM Rating
LEFT JOIN Filmes ON Filmes.id = Rating.movie_id GROUP BY Filmes.nome;

SELECT Filmes.id AS 'ID do filme', Filmes.nome AS 'Nome do filme', 
Actor.id AS 'ID do ator', Actor.name AS 'Nome do ator'
FROM Filmes
LEFT JOIN MovieCast ON Filmes.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;

SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Filmes m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;