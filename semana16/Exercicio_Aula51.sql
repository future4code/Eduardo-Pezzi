show tables; DESC Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
); 

INSERT INTO Actor VALUES("002", "Gloria Pires", "120000", "1963-08-23", "female");

INSERT INTO Actor VALUES("002", "Gloria Pires", "120000", "1963-08-23", "female");

SELECT * FROM Actor;

SELECT id, salary from Actor ;

SELECT id, name from Actor WHERE gender = "male";

SELECT * from Actor where gender = "female";

SELECT salary from Actor where name = "Tony Ramos";

SELECT * from Actor where gender = "invalid";

INSERT INTO Actor (id, name, salary, birth_date) VALUES("003", "Eduardo Pezzi", "400000", "1984-09-13");

SELECT * from Actor where salary <= 500;

SELECT id, nome from Actor WHERE id = "002";

SELECT id, name from Actor WHERE id = "002";

SELECT * from Actor where (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * from Actor where name NOT LIKE "A%" and salary > 350000;

SELECT * from Actor where name LIKE "%G%" OR "%g%";

SELECT * from Actor where (name LIKE "%A%" OR "%a%") OR (name LIKE "%G%" OR "%g%") AND salary between 350000 AND  900000;

CREATE TABLE Filmes (
id int NOT NULL AUTO_INCREMENT UNIQUE,
nome VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL,
data_lancamento DATE NOT NULL,
avaliacao INT(2) NOT NULL);

DESC Filmes;

INSERT INTO Filmes VALUES("01","Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos","2006-01-06", "07");

SHOW tables;

SELECT * from Filmes;

INSERT INTO Filmes VALUES("3","Dona Flor e Seus Dois Maridos","Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.","2017-11-02","8");

INSERT INTO Filmes VALUES("4", "Cidade de Deus", "Buscapé (Alexandre Rodrigues) é um jovem pobre, negro e muito sensível, que cresce em um universo de muita violência. Buscapé vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos da cidade. Amedrontado com a possibilidade de se tornar um bandido, Buscapé acaba sendo salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É através de seu olhar atrás da câmera que Buscapé analisa o dia-a-dia da favela onde vive, onde a violência aparenta ser infinita.", "2002-08-30", "9");

SELECT nome, id, avaliacao from Filmes where id="4";

SELECT * FROM Filmes where nome = "Doce de Mãe";

SELECT * from Filmes;

SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;

