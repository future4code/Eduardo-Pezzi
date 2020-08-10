# Exercício 1:

a. Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

* Exercício A)

A.
Comando                      | Explicação:
------------------           | ------------
CREATE TABLE Actor           | Cria a tabela Actor no banco de dados mello_eduardo_pezzi
id VARCHAR(255) PRIMARY KEY  | Cria a ID como sendo elemento único e chave primária da tabela com até 255 caractéres.
name VARCHAR (255) NOT NULL           | Cria o campo name na tabela que contará com o varchar de até 255 caractéres, não podendo ser nulo, obrigatoriamente terá um valor.
salary FLOAT NOT NULL           | Cria o campo salary com números de pontos flutuantes, não podendo ser nulo, obrigatoriamente receberá um valo numérico.
birth_date DATE NOT NULL  | Cria o campo birth_date na tabela, o campo recebe dados do tipo date que não podem ser nulos, obrigatoriamente receberá dados no formato data.
gender VARCHAR(6) NOT NULL | Cria o campo gender na tabela que receber um varchar de no máximo 6 caracteres, não podendo ser nulo, obrigatoriamente receberá um valor.


B. Comandos executados.

C. Ele traz a estrutura da tabela, com os campos criados e as informações dos campos.

# Exercício 2:

B. 16:52:50	INSERT INTO Actor VALUES("002", "Gloria Pires", "120000", "1963-08-23", "female")	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' - Ele nos informa que a tarefa não pode ser concluída pois ja existe um id primary key 002.

# Exercício 3:

C. Não há resultado retornado pois o campo gender é NOT NULL, dessa forma sempre existirão valores neste campo.

D. Não retorna resultado pois o critério não é atendido, nenhum usuário da lista tem o salário nessas condições.

E. Erro de sintaxe o campo 'nome' não existe, nós criamos campo semelhante escrito 'name';

# Exercício 4:

A. Basicamente estamos filtrando os resultados de acordo com nosso critério de encontrar registros que tenham as iniciais do nome com A e J e que também atendam a necessidade de ter um salario maior que 300000.

--------
# OBS: Outros exercícios digitados no SQL Workbench seguem no arquivo .sql na branch.