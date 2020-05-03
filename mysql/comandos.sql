Comandos 

obj : sempre usar aspas simples,
      caso queira usar acentos como nome da tableas ou bases umas crase ``´´,

ddl = comandos de definição de dados;

dml = comandos de manipulação de dados;

//criar um banco de dados.

CREATE DATABSE + banco
deixar um padrao de caracteres // default character set utf8
definir o mesmo padrao de coleção // default collate utf8_general_ci;

//criar um tabela


// (a dois parametro IF NOT EXISTS e IF EXISTS isto informa que so vai criar se nao existe o campo ou o IF EXISTS QUE SO DELETA O COMPO SE ELE EXISTIR)
CREATE TABLES + nome + (
    nome,
    altura
);default charset = utf8;

//colocar um novo valor a tabela ja existente

ALTER TABLE + tabela + ADD + valor a ser adicionado

//colocar um novo valor a tabela ja existente abaixo do valor informado.

ALTER TABLE + tabela + ADD + valor a ser adicionado + AFTER + valor informado;

//colocar um novo valor a tabela ja existente em primeiro da tabela.

ALTER TABLE + tabela + ADD + valor a ser adicionado + FIRST;

//removendo uma coluna

ALTER TABLE + tabela + DROP + nome coluna para remover;

//modificar a coluna

ALTER TABLE + tabela + modify + nome coluna para remover + caso queira recolocar um valor ja definido defina o default com vazio "";

//modifica tudo ate mesmo o nome do campo

ALTER TABLE + tabela + change + nome coluna para remover;

//renomear a tabela inteira

alter tebla + tabela + rename to + novo nome
/*
regras

not null  ===========  Obrigatorio preencher o campo;
enum ('', '', ...)  =  define os calores aceitos; obj: aspas simples;
decimal (5,2)  ====== define o tamanho das casa (5) e o ,2 -
    a quantidade de numeros depois da virgula dentro dos valor que seria 5;
default 'example'  ==  define um valor caso não seja preenchido no cadastro; obj: aspas simples.
auto_increment  =====  adiciona automaticamente um valor crecente mente de um a o ininito;
primary key(valor)  =  valor princimal da tabela;
uniqie  =============  SO pode ter um nome com esse valor
unsigned  ===========  essa regra nao deixa aver sinal no valor como exempço numeros negativos economizando 1 bity
limit  ==============  limita o o numero de linha que vao ser editadas

*/

//deletar um banco de dados

drop DATABSE + banco;

//deletar um tabela;

drop table + tabela;

//usar o banco de dados informado

USE + banco;

//mostrar as tabelas do banco de dados selecionado

SHOW TABLES;

//descrever a tabela

DESCRIBE + tabela;

//selecionar todos os dados da tabela

SELECT * FROM + usuario;

//selecionado todos os dados da tabela que possua o valor de pesquisa

SELECT * FROM + usuario + WHERE + Busca;

//seleciona o valor X que possua o valor de pesquisa

SELECT X FROM + usuario + WHERE + Busca;

//insere um valor no campo informado

INSERT INTRO + nameTable(campo de dado)+ VALUES ( , , );

//deleta toda a tabela e seu historico 0 ela

TRUNCATE table + nome da tabela

//deleta todos os dados da tabela

DELETE FROM + tabela;

//deleta o valor da tabela que possua o valor de busca.

DELETE FROM + tabela + WHERE + busca;

//renova o valor.

UPDATE + usuario + SET + novo dado + WHERE + campo para editar;



/* 
npm install --save sequelize
npm install --save mysql2
npm install express
npm install --save express-handlebars
npm install bootstrap@3
npm install --save body-parser

//numericos

TINYINT  =====================  1 byte
SMALLINT  ====================  2 bytes
MEDIUMINT  ===================  3 bytes
INT  =========================  4 bytes
INTEGER  =====================  4 bytes
BIGINT  ======================  8 bytes
FLOAT(X) =====================  4 ou 8 bytes
FLOAT  =======================  4 bytes
DOUBLE  ======================  8 bytes
DOUBLE PRECISION  ============  8 bytes
REAL  ========================  8 bytes
DECIMAL(M,D)  ================  M+2 bytes se D > 0, M+1 bytes se D = 0
NUMERIC(M,D)  ================  1M+2 bytes se D > 0, M+1 bytes se D = 0

//data

DATE  ========================  3 bytes
DATETIME  ====================  8 bytes
TIMESTAMP  ===================  4 bytes
YEAR  ========================  1 byte
TIME  ========================  3 bytes

//cadeia 

CHAR(n)  =====================  n bytes
VARCHAR(n)  ==================  n +1 bytes
TINYBLOB, TINYTEXT  ==========  Longitude+1 bytes
BLOB, TEXT  ==================  Longitude +2 bytes
MEDIUMBLOB, MEDIUMTEXT  ======  Longitude +3 bytes
LONGBLOB, LONGTEXT  ==========  Longitude +4 bytes
ENUM('value1','value2',...)  =  1 ó dos bytes dependendo do número de valores
SET('value1','value2',...)  ==  1, 2, 3, 4 ó 8 bytes, dependendo do número de valores

//example char

  VALOR      ->          char(4)              
'sem valor'  ->  'sem valor'  =  4 bytes
'ab'         ->  'ab '  =======  4 bytes
'abcd'       ->  'abcd'  ======  4 bytes
'abcdefgh'   ->  'abcd'  ======  4 bytes

//example varchar

  VALOR      ->          varchar(4)   
'sem valor'  ->  'sem valor'  =  1 byte
'ab'         ->  'ab '  =======  3 bytes
'abcd'       ->  'abcd'  ======  5 bytes
'abcdefgh'   ->  'abcd'  ======  5 bytes