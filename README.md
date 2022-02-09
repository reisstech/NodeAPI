# API REST em NodeJs com teste unitário, CI com GitHub Actions e deploy automático no Heroku.

API Rest desenvolvida no evento NLW da Rocketseat.

A aplicação é uma plataforma para promover o conhecimento entre companheiros de equipe. 

![Preview-Screens](https://github.com/reisstech/NodeAPI/blob/main/imgs_1.png)
![Preview-Screens](https://github.com/reisstech/NodeAPI/blob/main/imgs_2.png) 

# Projeto

Como forma de obter conhecimento, decidi adicionar na aplicação original:


- [x] Um teste unitário para a API.
- [x] Criar uma pipeline no GitHub Actions para fazer o Continuous Integration.
- [x] Utilizar o Heroku para fazer o deploy automático da aplicação assim que houver um novo commit (Continuous Deployment)


## Tecnologias usadas

* **NodeJS**
* **TypeScript**
*  **Express**
*  **Jest**
*  **GitHub Actions**
* **Heroku**

# Pré-Requisitos

* Ter o PostgreSQL rodando na porta 5432.
* Ter o NodeJs v+15 instalado.

# Como executar

* Clone o repositório
* Rode "yarn" ou "npm install" para baixar as dependências
* Necessário ter o PostegreSQL instalado e rodando na porta 5432
* Crie um arquivo .env na raiz do projeto com o caminho/URL do seu PostgreSQL:

Exemplo:

```
DATABASE_URL = postgres://postgres:postgres@localhost:5432/REST_API_NLW
```
* Rode yarn typeorm migration:run para criar as tabelas do banco de dados.


Para executar os testes unitários:

```
yarn test
```

Caso queira testar as rotas da aplicação pode utilizar o Insomnia ou Postman.


