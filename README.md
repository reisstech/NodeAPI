# API REST em NodeJs usando Express com teste unitário e deploy automático no Heroku.

API Rest desenvolvida no evento NLW da Rocketseat.

![Preview-Screens](https://github.com/reisstech/NodeAPI/blob/main/imgs_1.png)
![Preview-Screens](https://github.com/reisstech/NodeAPI/blob/main/imgs_2.png) 

# Projeto

Como forma de obter conhecimento, decidi criar um teste unitário para a aplicação, criar uma pipeline no GitHub Actions e fazer o deploy automático no Heroku.

## Tecnologias usadas

* **NodeJS**
* **TypeScript**
*  **Express**
*  **Jest**
*  **GitHub Actions**
* **Heroku**

# Pré-Requisitos

* Ter o PostgreSQL instalado e rodando na porta 5432 ou usar o Docker Compose.
* Ter o NodeJs v+15 instalado ou usar o Docker Compose.

# Como executar

* Clone o repositório
* Rode yarn para baixar as dependências
* Crie um arquivo .env na raiz do projeto com a seguinte informação:
```
DATABASE_URL = postgres://postgres:postgres@localhost:5432/REST_API_NLW
```
* Rode yarn typeorm migration:run para criar as tabelas do banco de dados.



Caso queira rodar o ambiente dentro do Docker, fazer o seguinte:


Alterar o arquivo docker-compose.yml e inserir o caminho do host que o Docker irá utilizar para montar os volumes dentro dos dois containers.

```
version: '3.7'

services:
  api:
    build: .
    volumes: 
      - <diretório_na_maquina_local>/NodeAPI:/app
    ports: 
      - "49160:3000"
    depends_on: 
      - postgres

  postgres:
    image: postgres
    environment:
      POSTGRES_PASSWORD: "postgres"
    ports:
      - "5432:5432"
    volumes:
      - <diretório_na_maquina_local>db_postgresql:/var/lib/postgresql/data

```

Rodar o comando abaixo na raiz do projeto. 

```
docker-compose up -d
```
Conforme especificado no docker-compose.yml, o Docker irá buildar a imagem do Node usando o arquivo Dockerfile abaixo:

```
FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

 
RUN npm install 

COPY . .

EXPOSE 8080

CMD ["yarn", "dev"]


```

Para executar os testes unitários:

```
yarn test
```

Caso queira testar as rotas da aplicação pode utilizar o Insomnia ou Postman.


