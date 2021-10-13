# API REST em NodeJs usando Express com testes unitário e deploy automático no Heroku.

API Rest desenvolvida no evento NLW da Rocketseat.

# Projeto

Como forma de obter conhecimento, decidi criar um teste unitário para a aplicação, criar uma pipeline no GitHub Actions e fazer o deploy automático no Heroku.

## Tecnologias usadas

* **NodeJS**
* **TypeScript**
*  **Express**
*  **Jest**
*  **GitHub Actions**
* **Heroku**

# Como executar

* Clone o repositório
* Rode yarn para baixar as dependências
* Rode yarn typeorm migration:run para criar as tabelas do banco de dados.

```
git clone https://github.com/reisstech/NodeAPI.git

cd NodeAPI

yarn

yarn typeorm migration:run
```
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

Rodar o comando abaixo na raiz do projeto. (É necessário ter o Docker Compose instalado) 

```
docker-compose up -d docker-compose.yml
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
