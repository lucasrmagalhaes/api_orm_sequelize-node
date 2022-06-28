***Iniciando o projeto***
```
npm init -y
```

***Instalação do express***
```
npm install express
```

***Instalação do body-parser***
```
npm install body-parser
```

***Executando o server***
```
node api/index.js
```

***Instalação do nodemon***
```
npm install --save-dev nodemon
```

***Rodando o server***
```
npm run start
```

***Instalação do MySQL***
```
npm install mysql2
```

***Instalações do sequelize, sequelize-cli e path***
```
npm install sequelize sequelize-cli path
```

***Iniciando o sequelize-cli***
```
npx sequelize-cli init
```

***Endereço do MySQL no XAMPP***
```
cd c:\xampp\mysql\bin
```

***Acessando o MySQL***
```
mysql.exe -u root -p
```

***Listando os databases***
```
show databases;
```

***Criação do database: escola_ingles***
```
CREATE DATABASE escola_ingles;
```

- ORM significa Mapeador de Objeto Relacional (em uma tradução livre) e usamos para isolar a camada relacional de dados do restante da aplicação;
- ORMs oferecem uma interface única, que pode ser utilizada para vários bancos de dados relacionais diferentes;
- Ajudam o time a ganhar agilidade no desenvolvimento das aplicações; e
- Esta interface única “esconde” as especificidades dos diversos bancos relacionais, diminuindo a complexidade do código.

***Criação da Modelo Pessoas***
```
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
```

***Migração em SQL***
- Migração de dados: transferência de dados entre plataformas.
- Migração com ORM: alterações incrementais e rastreáveis no banco.

***Mudanças no Esquema***
- Coordenar alterações feitas por diferentes pessoas no time nas tabelas do banco.
- Rastrear (e reverter) alterações feitas no banco para debugar conflitos e erros.

***freezeTableName:*** “congelar” o nome da tabela, assim o Sequelize não vai tentar pluralizar.

***Rodando as migrates***
```
npx sequelize-cli db:migrate
```

***Utilizar o db: escola_ingles***
```
use escola_ingles;
```

***Listar as tabelas***
```
show tables;
```

***Ver colunas da tabela Pessoas***
```
describe Pessoas;
```

***Inserindo dados***
```
insert into Pessoas (nome, ativo, email, role, createdAt, updatedAt) values ("Lucas", 1, "lucas@gmail.com", "estudante", NOW(), NOW());
```

***Dados da tabela Pessoas***
```
select * from Pessoas;
```

***Criando um seed***
```
npx sequelize-cli seed:generate --name demo-pessoa
```

***Rodando o seed***
```
npx sequelize-cli db:seed:all
```