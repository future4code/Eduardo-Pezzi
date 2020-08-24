# Exercício aula 54 - Relações em MySQL - 13/08/2020.


## Exercício 1:

### A)
    Chave estrangeira é um vínculo criado entre a tabela presente e uma outra a qual se deseja consultar e criar relação.

### C)
    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_eduardo_pezzi`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
    O Erro ocorre devido a não constar o referido ID na tabela que foi vinculada.

### D)
    ALTER TABLE Filmes DROP column avaliacao;

### E)
    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_eduardo_pezzi`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
    O Erro ocorre devido ao vínculo estar ativo, dessa forma esse dado se torna relevante e 'inserido' na outra tabela, não sendo possível apagá-lo sem comprometimento da integridade da outra tabela.


## Exercício 2:

### A)
    Essa é uma 'tabela de Junção' ela aglutinará as chaves estrangeiras para que sua necessidade seja atendida.

### C)
    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_eduardo_pezzi`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
    O Erro ocorre pois como estamos vinculando uma chave estrangeira a um ID inexistente em outra tabela o vínculo falha e nos retorna esse erro.

### D)
    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_eduardo_pezzi`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
    O Erro ocorre pois deletar essa entrada causaria falha na integridade da outra tabela vinculada que conta com esse dado como sendo um dos seus.


## Exercício 3:

### A)
    O operador ON nos gera uma condição a ser atendida, nós queremos uma nova tabela de visualização somente onde os ítens são vinculados, dessa forma uma busca por esse vínculo é feita, e o resultado nos retornado.

### B)
    SELECT Filmes.nome, Filmes.id, Rating.rate FROM Filmes  inner JOIN Rating ON Filmes.id = Rating.movie_id;

## Exercício 4:

### A)
    SELECT Filmes.id ,Filmes.nome, Rating.rate, Rating.comment From Filmes
    LEFT JOIN Rating ON Filmes.id = Rating.movie_id;

### B)
    SELECT Filmes.id AS "ID do Filme", Filmes.nome AS "Nome da obra", 
    Rating.rate AS "Classificação da obra",
    Rating.comment As "Comentários sobre a obra" 
    FROM Filmes LEFT JOIN Rating ON Filmes.id = Rating.movie_id;

### C)
    SELECT Filmes.nome AS "Nome do filme", AVG(Rating.rate) AS "Avaliação média" FROM Rating
    LEFT JOIN Filmes ON Filmes.id = Rating.movie_id GROUP BY Filmes.nome;

## Exercício 5:

### A)
    Estamos trazendo integração para 3 tabelas, incluindo a tabela de 'Junção' que possui chaves estrangeiras de ambas.

### B)
    SELECT Filmes.id AS 'ID do filme', Filmes.nome AS 'Nome do filme', 
    Actor.id AS 'ID do ator', Actor.name AS 'Nome do ator'
    FROM Filmes
    LEFT JOIN MovieCast ON Filmes.id = MovieCast.movie_id
    JOIN Actor ON Actor.id = MovieCast.actor_id;

### C)
    SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Filmes m
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;
