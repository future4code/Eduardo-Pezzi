# Exercício 1:

* A) Com esse comando a coluna salario da tabela será removida juntamente com seus valores.

* B) Dessa forma o tipo de valor envolvido na coluna será alterado para VARCHAR de no máx 6 caracteres;

* C) Acredito que ocorrerá um erro devido a duplicidade na declaração da coluna a ser editada, caso não dê erro ou tenha sido um ato falho, esse comando executa a mesma tarefa acima aumentando a capacidade de receber caracteres nesta colune, para no máx 255.

* D) Na verdade não ocorreu erro, usando uma ID inválida ele não acusa erro porém a mensagem mostra que 0 colunas foram 'afetadas' ou seja: o comando é válido mas nada foi alterado;

# Exercício 5:

* A) Dessa forma a colune 'gender' está sendo organizada, acredito que seja feita de forma alfabética ou levando em consideração a que foi criada primeiro.

# Exercício 6:

* D) Não é retornado erro, o comando percorre a tabela sem encontrar o ID especificado e retorna sem ter alterado nenhuma row.

# Exercício 7:

* A) SELECT COUNT(*) from Filmes where avaliacao > 7;

* B) SELECT AVG(avaliacao) from Filmes;

* D) SELECT count(*) FROM Filmes WHERE CURDATE() < data_lancamento;

* E) SELECT nome, avaliacao from Filmes ORDER BY avaliacao DESC LIMIT 1;

* F) SELECT nome, avaliacao from Filmes ORDER BY avaliacao ASC LIMIT 1;

# Exercício 8:

* A) SELECT nome from Filmes ORDER BY nome ASC;

* B) SELECT nome from Filmes ORDER BY nome ASC LIMIT 5;

* C) SELECT * from Filmes where CURDATE() < playing_limit_date LIMIT 3;

* D) SELECT nome, avaliacao from Filmes ORDER BY avaliacao DESC LIMIT 3;


-------


## Todos os comandos seguem no arquivo .SQL em anexo na branch.